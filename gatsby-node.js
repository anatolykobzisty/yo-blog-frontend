const { create } = require('domain');
const path = require('path');

// Шаблоны
const postTemplate = path.resolve('./src/templates/SinglePost.js');
const frontTemplate = path.resolve('./src/templates/FrontPage.js');
const categoryTemplate = path.resolve('./src/templates/SingleCategory.js');

// Создание главной страницы
const createFrontPage = (createPage, posts) => {
  const { nodes } = posts;
  const postsPerPage = 4;
  const numPages = Math.ceil(nodes.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}`,
      component: frontTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

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

    // 1. Создаем страницы для статей
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

    // 2. Создаем главную страницу
    createFrontPage(createPage, posts);

    // 3. Создаем страницы категорий
    categories.nodes.forEach(category => {
      createPage({
        path: `/categories/${category.title.toLowerCase()}`,
        component: categoryTemplate,
        context: {
          categoryTitle: category.title,
          posts,
        },
      });
    });
  });
};
