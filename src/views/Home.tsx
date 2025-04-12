import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ArticleItem from '../components/ArticleItem';
import { PostList } from '../types/article';
import {
  Container,
  ContainerMobile,
  Title,
  Content,
  PostsList,
  LoadingContainer,
  Spinner,
  ErrorMessage,
  EmptyState,
  Header,
  HeaderMobile
} from './Home.styles';
import { Filters, Filter } from '../components/Filters';
import { useMediaQuery } from '../hooks/use-media-query';
import { Button } from '../components/common/Button';
import ConditionWrapper from '../components/ConditionWrapper';

const fetchPosts = async (): Promise<PostList> => {
  const response = await fetch('https://tech-test-backend.dwsbrazil.io/posts');
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json();
};

const Home: React.FC = () => {
  const isMobile = useMediaQuery((width: number) => width <= 768);

  const [filters, setFilters] = useState<Filter>({ author: [], category: [] });
  const [sorting, setSorting] = useState(true);

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  const filteredPosts = posts?.filter(post => {
    if (filters.author.length === 0 && filters.category.length === 0) {
      return true;
    }
    const matchesAuthor = filters.author.length === 0 || filters.author.some(a => a.id === post.author.id);
    const matchesCategory =
      filters.category.length === 0 ||
      post.categories.some(category => filters.category.some(c => c.id === category.id));
    return matchesAuthor && matchesCategory;
  }).sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  if (!sorting) {
    filteredPosts?.reverse();
  }

  return (
    <ConditionWrapper
      condition
      wrapper={({ children }) => {
        if (isMobile) {
          return (
            <ContainerMobile>
              <HeaderMobile>
                <Filters mobile filters={filters} onChange={setFilters} />
                <div className='sort-by'>
                  Sort by:
                  <Button variant='tertiary' onClick={() => setSorting(sorting => !sorting)}>
                    {/* <Icon name="filter" /> */}
                    {sorting ? 'Newest first' : 'Oldest first'}
                  </Button>
                </div>
              </HeaderMobile>
              {children}
            </ContainerMobile>
          )
        }
        else {
          return (
            <Container>
              <Header>
                <Title>DWS blog</Title>
                <div className='sort-by'>
                  Sort by:
                  <Button variant='tertiary' onClick={() => setSorting(sorting => !sorting)}>
                    {/* <Icon name="filter" /> */}
                    {sorting ? 'Newest first' : 'Oldest first'}
                  </Button>
                </div>
              </Header>
              <Content>
                <div>
                  <Filters filters={filters} onChange={setFilters} />
                </div>
                {children}
              </Content>
            </Container>
          )
        }
      }}
    >
      {isLoading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : error ? (
        <ErrorMessage>
          Error loading posts. Please try again later.
        </ErrorMessage>
      ) : (
        <div>
          {!filteredPosts || filteredPosts.length === 0 ?
            <EmptyState>
              <p>No posts found</p>
            </EmptyState>
          : (
            <PostsList>
              {filteredPosts.map((post) => (
                <ArticleItem key={post.id} post={post} />
              ))}
            </PostsList>
          )}
        </div>
      )}
    </ConditionWrapper>
  );
};

export default Home; 