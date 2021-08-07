const path = require('path');

// Шаблоны
const postTemplate = path.resolve('./src/templates/SinglePost.js');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      posts: allSanityPost {
        nodes {
          title
          id
          _updatedAt(formatString: "DD-MM-YYYY")
          body
          slug {
            current
          }
          image {
            asset {
              id
              fluid(maxWidth: 400) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
          categories {
            title
            id
          }
        }
      }
      categories: allSanityCategory {
        nodes {
          title
          id
        }
      }
    }
  `).then(results => {
    if (results.errors) {
      throw results.errors;
    }
    const { posts, categories } = results.data;

    // Создаем страницы для статей
    posts.nodes.forEach((post, index) => {
      const previous = index === posts.nodes.length - 1 ? null : posts.nodes[index + 1];
      const next = index === 0 ? null : posts.nodes[index - 1];

      createPage({
        // URL каждого поста
        path: `${post.slug.current}`,
        component: postTemplate,
        context: {
          slug: post.slug.current,
          previous,
          next,
        },
      });
    });
  });
};
