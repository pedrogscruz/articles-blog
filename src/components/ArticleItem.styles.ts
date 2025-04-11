import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticleContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.neutrals.lightest};
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  background-color: white;
  @media (max-width: 480px) {
    border: none;
  }
`;

export const ArticleThumbnail = styled.img`
  height: 196px;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  & > span.dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary.light};
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.neutrals.darkest};
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: auto;
`;

export const CategoryTag = styled.caption`
  padding: 0.5rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.neutrals.lightest};
  border-radius: 9999px;
`; 