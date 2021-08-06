import React from 'react';
import styled from 'styled-components';

const BlogPosts = props => {
  const { posts } = props;
  return (
    <Container>
      <RowGrid>{posts.map(post => post.title)}</RowGrid>
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
