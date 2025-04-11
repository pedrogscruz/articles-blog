import React from 'react';
import { useParams } from 'react-router-dom';

const Article: React.FC = () => {
  const { post_id } = useParams();

  return (
    <div>
      <h1>Article {post_id}</h1>
    </div>
  );
};

export default Article; 