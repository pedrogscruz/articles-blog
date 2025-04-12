import React, { useMemo } from 'react';
import type { Post } from '../types/article';
import {
  ArticleContainer,
  ArticleThumbnail,
  ArticleContent,
  Header,
  Title,
  Content,
  CategoriesContainer,
  CategoryTag
} from './ArticleItem.styles';

interface ArticleItemProps {
  post: Post;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ post }) => {

  const formattedAuthorLastName = useMemo(() => {
    return post.author.name.split(' ').pop();
  }, [post.author.name]);

  const formattedDate = useMemo(() => {
    return new Date(post.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }, [post.createdAt]);

  return (
    <ArticleContainer to={`/article/${post.id}`}>
      <ArticleThumbnail src={post.thumbnail_url} alt={post.title} />
      <ArticleContent>
        <Header>
          <span>{formattedDate}</span>
          <span className="dot" />
          <span>{formattedAuthorLastName}</span>
        </Header>
        
        <Title>{post.title}</Title>
        
        <Content>{post.content}</Content>
        
        <CategoriesContainer>
          {post.categories.map((category) => (
            <CategoryTag key={category.id}>
              {category.name}
            </CategoryTag>
          ))}
        </CategoriesContainer>
      </ArticleContent>
    </ArticleContainer>
  );
};

export default ArticleItem; 