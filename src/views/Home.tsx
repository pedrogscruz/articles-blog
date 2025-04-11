import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ArticleItem from '../components/ArticleItem';
import { PostList } from '../types/article';
import {
  Container,
  Title,
  PostsList,
  LoadingContainer,
  Spinner,
  ErrorMessage
} from './Home.styles';

const fetchPosts = async (): Promise<PostList> => {
  const response = await fetch('https://tech-test-backend.dwsbrazil.io/posts');
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json();
};

const Home: React.FC = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorMessage>
        Error loading posts. Please try again later.
      </ErrorMessage>
    );
  }

  return (
    <Container>
      <Title>DWS blog</Title>
      <PostsList>
        {posts?.map((post) => (
          <ArticleItem key={post.id} post={post} />
        ))}
      </PostsList>
    </Container>
  );
};

export default Home; 