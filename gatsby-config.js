const dotenv = require('dotenv');

dotenv.config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Yo Blog`,
    siteUrl: `https://yo-blog.ru`,
    description: `Фото с путешествий`,
    author: 'Anatoly',
    vk: `https://vk.com/yo-blog.ru`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'dr5z3qwe',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
