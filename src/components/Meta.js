import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Meta = ({ children, description, title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          vk
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="ru" />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/png" href="/gatsby-icon.png" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={description || site.siteMetadata.description} />
      {children}
    </Helmet>
  );
};
export default Meta;
