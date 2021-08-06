import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const HomePage = ({ data }) => {
  const { posts } = data;

  console.log('posts >>', posts);
  return (
    <Layout test="woow">
      <h1>Главная страница. ({posts.nodes.length} статьи)</h1>
      <p>
        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому,
        что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в
        абзацах, которое не получается при простой дубликации "Здесь ваш текст..
      </p>
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query {
    posts: allSanityPost {
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
