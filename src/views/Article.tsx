import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ArticleItem from '../components/ArticleItem';
import { Post } from '../types/article';
import {
  Container,
  Content,
  ArticleHeader,
  ArticleMeta,
  AuthorInfo,
  AuthorAvatar,
  AuthorName,
  PublishedDate,
  ArticleThumbnail,
  ArticleContent,
  LatestArticles,
  LatestArticlesTitle,
  LatestArticlesList,
  Separator
} from './Article.styles';
import { Button } from '../components/common/Button';
import { useMediaQuery } from '../hooks/use-media-query';

const fetchPost = async (id: string): Promise<Post> => {
  const response = await fetch(`https://tech-test-backend.dwsbrazil.io/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};

const fetchLatestPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://tech-test-backend.dwsbrazil.io/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch latest posts');
  }
  const posts = await response.json();
  return posts.slice(0, 3); // Get only the 3 latest posts
};

const Article: React.FC = () => {
  const { post_id } = useParams<{ post_id: string }>();
  const isMobile = useMediaQuery((width: number) => width <= 768);
  
  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ['post', post_id],
    queryFn: () => fetchPost(post_id!),
    enabled: !!post_id
  });

  const { data: latestPosts, isLoading: isLoadingLatest } = useQuery({
    queryKey: ['latestPosts'],
    queryFn: fetchLatestPosts
  });

  if (isLoadingPost || isLoadingLatest) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Container>
      <div style={{ flex: 1 }}><Button variant="secondary">Back</Button></div>
      <Content>
        <ArticleHeader>
          {isMobile ? <h2>{post.title}</h2> : <h1>{post.title}</h1>}
          <ArticleMeta>
            <AuthorInfo>
              <AuthorAvatar src={post.author.profilePicture} alt={post.author.name} />
              <div className="article-info">
                <AuthorName>Written by: <span className="author-name">{post.author.name}</span></AuthorName>
                <PublishedDate>{formattedDate}</PublishedDate>
              </div>
            </AuthorInfo>
          </ArticleMeta>
        </ArticleHeader>

        <ArticleThumbnail src={post.thumbnail_url} alt={post.title} />

        <ArticleContent>
          {post.content}
        </ArticleContent>

        <Separator />

        <LatestArticles>
          <LatestArticlesTitle>Latest articles</LatestArticlesTitle>
          <LatestArticlesList>
            {latestPosts?.map((latestPost) => (
              <ArticleItem key={latestPost.id} post={latestPost} />
            ))}
          </LatestArticlesList>
        </LatestArticles>
      </Content>
      <div style={{ flex: 1 }} />
    </Container>
  );
};

export default Article; 