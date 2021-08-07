import React from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import CategoryFilter from './CategoryFilter';

const BlogPosts = props => {
  const { posts } = props;
  return (
    <Container>
      <CategoryFilter />
      <RowGrid>
        {posts.map(post => (
          <ItemCard key={post.id} post={post} />
        ))}
      </RowGrid>
    </Container>
  );
};

export default BlogPosts;

const Container = styled.div``;
const RowGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
