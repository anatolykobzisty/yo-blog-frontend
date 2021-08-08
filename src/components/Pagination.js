import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PaginationStyles from '../styles/PaginationStyles';

const Pagination = props => {
  const { pageContext } = props;

  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = currentPage + 1;

  return (
    <PaginationStyles>
      <Link to={`${prevPage}`} rel="prev" aria-disabled={isFirst}>
        ← Назад
      </Link>

      <TotalPages>
        Страница {currentPage} из {numPages}
      </TotalPages>

      <Link to={`/page/${nextPage}`} rel="next" aria-disabled={isLast}>
        Вперед →
      </Link>
    </PaginationStyles>
  );
};

const TotalPages = styled.p`
  @media only screen and (max-width: 390px) {
    display: none;
  }
`;

export default Pagination;
