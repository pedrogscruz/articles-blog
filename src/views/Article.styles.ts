import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
`;

export const ArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > .article-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const AuthorAvatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorName = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  & > .author-name {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const PublishedDate = styled.time`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.neutrals.medium};
`;

export const ArticleThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
`;

export const ArticleContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  white-space: pre-line;

  p {
    margin-bottom: 1.5rem;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutrals.light};
`;

export const LatestArticles = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const LatestArticlesTitle = styled.h2`
  font-size: ${({ theme }) => theme.h2.fontSize};
  font-weight: ${({ theme }) => theme.h2.fontWeight};
  color: ${({ theme }) => theme.colors.neutrals.darkest};
`;

export const LatestArticlesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(314px, 1fr));
  gap: 1.5rem;
`; 