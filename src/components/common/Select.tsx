import { useRef, useState, useCallback, useEffect } from 'react';
import { Container, SelectButton, OptionsList, Option, SelectedOptions } from './styles';

type SelectProps<T, K = boolean> = {
  multiple?: K;
  options: T[];
  labelAccessor: keyof T;
  valueAccessor: keyof T;
  onChange: (value: K extends true ? T[] : T) => void;
  label?: string;
  value: K extends true ? T[] : T;
};

export const Select = <T extends object, K extends boolean = false>({
  multiple = false as K,
  options,
  labelAccessor,
  valueAccessor,
  onChange,
  label,
  value
}: SelectProps<T, K>) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsListRef = useRef<HTMLUListElement>(null);

  const updatePosition = useCallback(() => {
    if (!containerRef.current) return
    if (!optionsListRef.current) return
    const gap = 4;
    const rect = containerRef.current.getBoundingClientRect();
    optionsListRef.current.style.top = `${rect.bottom + gap}px`;
    optionsListRef.current.style.left = `${rect.left + window.scrollX}px`;
    // optionsListRef.current.style.width = `${rect.width}px`;
  }, []);

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
    }
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (option: T) => {
    if (multiple) {
      const currentValue = value as T[];
      const isSelected = currentValue.some(
        (v) => v[valueAccessor] === option[valueAccessor]
      );

      const newValue = isSelected
        ? currentValue.filter((v) => v[valueAccessor] !== option[valueAccessor])
        : [...currentValue, option];

      onChange(newValue as K extends true ? T[] : T);
    } else {
      onChange(option as K extends true ? T[] : T);
      setIsOpen(false);
    }
  };

  const isSelected = (option: T) => {
    if (multiple) {
      return (value as T[]).some((v) => v[valueAccessor] === option[valueAccessor]);
    }
    return (value as T)[valueAccessor] === option[valueAccessor];
  };

  const getDisplayValue = () => {
    if (multiple) {
      const selectedOptions = (value as T[]).map(
        (v) => v[labelAccessor] as string
      );
      return selectedOptions.join(', ') || label || 'Select options...';
    }
    return (value as T)?.[labelAccessor] as string || label || 'Select an option...';
  };

  return (
    <Container ref={containerRef}>
      <SelectButton
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <SelectedOptions>{getDisplayValue()}</SelectedOptions>
      </SelectButton>
      {isOpen && (
        <OptionsList ref={optionsListRef}>
          {options.map((option) => (
            <Option
              key={String(option[valueAccessor])}
              onClick={() => handleOptionClick(option)}
              isSelected={isSelected(option)}
            >
              {String(option[labelAccessor])}
            </Option>
          ))}
        </OptionsList>
      )}
    </Container>
  );
}; 