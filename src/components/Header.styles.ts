import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.lightest};
  .logo {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    & > h2 {
      line-height: 2rem;
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutrals.darkest};
`;

export const SearchItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 11;
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 20px;
  width: 20px;
`