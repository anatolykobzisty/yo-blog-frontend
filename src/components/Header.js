import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <ul>
    <li>
      <Link to="/">Главная</Link>
    </li>
    <li>
      <Link to="/postone">Статья №1</Link>
    </li>
  </ul>
);

export default Header;
