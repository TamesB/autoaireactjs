import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.article`
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const PostTitle = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const PostMeta = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  line-height: 1.6;
  color: #444;
`;

export default function BlogPost({ post }) {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostMeta>
        <span>By {post.author}</span> | 
        <span> {new Date(post.date).toLocaleDateString()}</span>
      </PostMeta>
      <PostContent>
        {post.content}
      </PostContent>
    </PostContainer>
  );
}