import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import CategoryFilterStyles from '../styles/CategoryFilterStyles';
import { CATEGORY_LABELS_LIST } from '../constants';

const countPostInCategories = posts => {
  const catCounts = posts
    .map(post => post.categories)
    .flat()
    .reduce((accum, curVal) => {
      if (!accum[curVal.id]) {
        accum[curVal.id] = {
          ...curVal,
          count: 1,
        };
      } else {
        accum[curVal.id] = {
          ...curVal,
          count: accum[curVal.id].count + 1,
        };
      }

      return accum;
    }, {});

  const sortedCategories = Object.values(catCounts).sort((a, b) => a.count - b.count);

  return sortedCategories;
};

const CategoryFilter = () => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allSanityPost {
        nodes {
          categories {
            title
            id
          }
        }
      }
    }
  `);

  const categoriesWithCounts = countPostInCategories(posts.nodes);
  return (
    <CategoryFilterStyles>
      <Link to="/">
        <span className="tagTitle">Все</span>
        <span className="tagCount">{posts.nodes.length}</span>
      </Link>
      {categoriesWithCounts.map(category => (
        <Link key={category.id} to={`/categories/${category.title.toLowerCase()}`}>
          <span className="tagTitle">{CATEGORY_LABELS_LIST[category.title]}</span>
          <span className="tagCount">{category.count}</span>
        </Link>
      ))}
    </CategoryFilterStyles>
  );
};

export default CategoryFilter;
