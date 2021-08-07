import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import ItemGridStyles from '../styles/ItemGridStyles';
import { CATEGORY_LABELS_LIST } from '../constants';

const ItemCard = props => {
  const { post } = props;
  const description = post.body.split(' ').slice(0, 18).join(' ');

  return (
    <ItemGridStyles>
      <Img fluid={post.image.asset.fluid} alt={post.title} />

      <div className="itemGridWrap">
        <div className="postTitle">
          <Link to={`/${post.slug.current}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
        <div className="postBody">
          <span className="postUpdated">{post._updatedAt}</span>
          <p>{description}...</p>
        </div>
        <div>
          {post.categories.map(category => (
            <Link key={category.id} to={`/categories/${category.title.toLowerCase()}`}>
              <span className="categoryTag">#{CATEGORY_LABELS_LIST[category.title]}</span>
            </Link>
          ))}
        </div>
      </div>
    </ItemGridStyles>
  );
};

export default ItemCard;
