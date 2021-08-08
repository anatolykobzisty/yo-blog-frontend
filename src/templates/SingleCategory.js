import React from 'react';
import BlogPosts from '../components/BlogPost';
import Layout from '../components/Layout';

const SingleCategory = props => {
  const { pageContext, location } = props;
  const { posts, categoryTitle } = pageContext;

  const postsForCategory = posts.nodes.filter(post => post.categories.some(category => category.title === categoryTitle));

  return (
    <Layout>
      <BlogPosts posts={postsForCategory} />
    </Layout>
  );
};

export default SingleCategory;
