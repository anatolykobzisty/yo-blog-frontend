import styled from 'styled-components';

const PaginationStyles = styled.div`
  width: 100%;
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  align-items: stretch;
  align-content: center;
  margin: 4rem 0 0;
  border: 1px solid ${props => props.theme.lightgrey};
  border-radius: 10px;
  background: #fff;
  a {
    color: ${props => props.theme.black};
  }
  & > * {
    margin: 0;
    padding: 10px;
    @media only screen and (max-width: 710px) {
      padding: 7px 12px;
    }
    border-right: 1px solid ${props => props.theme.lightgrey};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  @media only screen and (max-width: 390px) {
    grid-template-columns: repeat(2, auto);
  }
`;

export default PaginationStyles;
