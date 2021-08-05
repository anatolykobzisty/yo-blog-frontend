import React from 'react';
import { Link } from 'gatsby';
import FooterStyles from '../styles/FooterStyles';

const Footer = () => (
  <FooterStyles>
    <div className="wrapperForm">
      <legend>
        <span className="formAction">Подписаться</span> на нашу рассылку
      </legend>
    </div>
    <div className="wrapperMain">
      <Link to="/">Yo Blog </Link>
      &copy; {new Date().getFullYear()}
    </div>
  </FooterStyles>
);

export default Footer;
