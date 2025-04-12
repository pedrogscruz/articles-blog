import styled from 'styled-components';
import { hexToRgba } from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.neutrals.lightest};
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    position: relative;
    padding: 0.25rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.lightest};
  }
`;

export const FilterName = styled.div`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-bottom: .5rem;
`;

export const FilterButton = styled.button<{ selected: boolean }>`
  padding: 0.75rem .5rem;
  width: 100%;
  text-align: left;
  ${({ theme, selected }) => {
    if (!selected) return null;
    const backgroundColor = hexToRgba(theme.colors.accent1.light, 0.05);
    return `background-color: ${backgroundColor}`
  }};
  color: ${({ theme, selected }) => selected ? theme.colors.accent1.dark : 'inherit'};
  border: 1px solid ${({ theme, selected }) => selected ? theme.colors.accent1.dark : 'transparent'};
  border-radius: 10px;
  font-weight: ${({ theme, selected }) => selected ? theme.fontWeight.medium : 'inherit'};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.accent1.dark};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border-color: ${({ theme }) => theme.colors.neutrals.extraLight};
  }
`;