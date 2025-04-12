import React, { FC } from "react";
import styled from "styled-components";

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: ButtonVariant
}

export const Button:FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  return <StyledButton variant={variant} {...props} />;
};

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: ${({ variant }) => variant === 'tertiary' ? '0.5rem' : '0.75rem 1rem'};
  background-color: ${({ theme, variant }) => variant === 'primary' ? theme.colors.secondary.medium : 'transparent'};
  color: ${({ theme, variant }) => variant === 'primary' ? theme.colors.neutrals.lightest : variant === 'secondary'  ? theme.colors.secondary.medium : theme.colors.neutrals.extraDark};
  ${({ theme, variant }) => variant === 'secondary' && `border: 1px solid ${theme.colors.secondary.medium};`};
  ${({ variant }) => variant !== 'primary' && 'width: fit-content;'};
  border-radius: 100px;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${({ theme, variant }) => {
      if (variant === 'primary') {
        return `background-color: ${theme.colors.secondary.dark};`;
      }
      else if (variant === 'secondary') {
        return `
          border-color: ${theme.colors.secondary.dark};
          color: ${theme.colors.secondary.dark};
        `;
      }
      else if (variant === 'tertiary') {
        return `
          background-color: ${theme.colors.accent1.medium};
          color: white;
          & > svg {
            fill: white;
          }
        `;
      }
    }};
  }
`