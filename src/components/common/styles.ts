import styled from 'styled-components';
import { hexToRgba } from '../../utils/colors';

export const Container = styled.div`
  display: inline-block;
`;

export const SelectButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.neutrals.lightest};
  color: ${({ theme }) => theme.colors.secondary.medium};
  border: 1px solid ${({ theme }) => theme.colors.secondary.medium};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: space-between;
  font-size: .75rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => hexToRgba(theme.colors.secondary.medium, 0.05)};
  }

  &::after {
    content: '';
    width: 5px;
    height: 5px;
    border-right: 2px solid ${({ theme }) => theme.colors.secondary.medium};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary.medium};
    transform: ${({ isOpen }) => isOpen ? 'rotate(-135deg) translate(0px, -1px) ' : 'rotate(45deg) translate(-2px, -2px) '};
    transition: transform 0.2s ease-in-out;
    margin-left: 0.5rem;
  }
`;

export const SelectedOptions = styled.span`
  white-space: nowrap;
`;

export const OptionsList = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.neutrals.lightest};
  border: 1px solid ${({ theme }) => theme.colors.neutrals.light};
  border-radius: 1rem;
  max-height: min(300px, 50vh);
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.05);
  margin: 0;
  padding: 1rem;
  list-style: none;
`;

export const Option = styled.li<{ isSelected: boolean }>`
  padding: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  line-height: 14px;
  font-weight: ${({ theme, isSelected }) => isSelected ? theme.fontWeight.bold : theme.fontWeight.regular};

  &:hover {
    text-decoration: underline;
  }
`; 