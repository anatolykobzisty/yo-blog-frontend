import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import ItemCard from '../components/ItemCard';
import SinglePostStyles from '../styles/SinglePostStyles';
import { CATEGORY_LABELS_LIST } from '../constants';

const SinlePost = props => {
  const { data, pageContext } = props;
  const { post } = data;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SinglePostStyles>
        <h1>{post.title}</h1>
        <div className="singlePostMeta">
          {post.categories.map(category => (
            <span className="tagTitle" key={category.id}>
              # {CATEGORY_LABELS_LIST[category.title]}
            </span>
          ))}
          <span className="postDate">Обновлено {post._updatedAt}</span>
        </div>
        <Img fluid={post.image.asset.fluid} />
        <p>{post.body}</p>
        <hr />
        <h3>Еще статьи...</h3>
        <div className="moreItems">
          {previous && <ItemCard post={previous} />}
          {next && <ItemCard post={next} />}
        </div>
      </SinglePostStyles>
    </Layout>
  );
};

export default SinlePost;

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      _updatedAt(formatString: "DD-MM-YYYY")
      title
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
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
