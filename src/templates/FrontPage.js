import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogPosts from '../components/BlogPost';
import Pagination from '../components/Pagination';
import Meta from '../components/Meta';

const FrontPage = props => {
  const { data, pageContext } = props;
  const { posts } = data;

  return (
    <Layout>
      <Meta title="Home Page" />
      <BlogPosts posts={posts.nodes} />
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export default FrontPage;

export const query = graphql`
  query($limit: Int = 4, $skip: Int = 0) {
    posts: allSanityPost(limit: $limit, skip: $skip) {
      nodes {
        id
        title
        _updatedAt(formatString: "DD-MM-YYYY")
        body
        categories {
          title
          id
        }
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
