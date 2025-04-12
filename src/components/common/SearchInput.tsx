import React, { useRef, useState, useEffect } from 'react';
import { SearchContainer, SearchInputField, SearchOptionsPanel, SearchOption } from './styles';

interface SearchInputProps<T> {
  options: T[];
  match: (item: T, searchText: string) => boolean;
  renderOption: (item: T, searchText: string) => React.ReactNode;
  placeholder?: string;
}

export const SearchInput = <T extends object>({
  options,
  match,
  renderOption,
  placeholder = 'Search'
}: SearchInputProps<T>) => {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(option => match(option, searchText));

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  const handleOptionClick = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <SearchContainer ref={containerRef}>
      <SearchInputField
        type="text"
        value={searchText}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
      />
      {isOpen && filteredOptions.length > 0 && (
        <SearchOptionsPanel>
          {filteredOptions.map((option, index) => (
            <SearchOption
              key={index}
              isSelected={index === selectedIndex}
              onClick={() => handleOptionClick(index)}
            >
              {renderOption(option, searchText)}
            </SearchOption>
          ))}
        </SearchOptionsPanel>
      )}
    </SearchContainer>
  );
}; 