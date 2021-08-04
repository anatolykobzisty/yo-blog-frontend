import styled from 'styled-components';

const CategoryFilterStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 10px;
    align-items: center;
    padding: 7px 10px;
    background: ${props => props.theme.lightgrey};
    color: ${props => props.theme.black};
    font-family: 'Balsamiq Sans', cursive;
    font-weight: 700;
    border-radius: 2px;
    text-decoration: none;
    font-size: 18px;
    line-height: 1.2;
    &[aria-current='page'] {
      .tagTitle {
        color: ${props => props.theme.yellow};
        border-bottom: ${props => `2px solid ${props.theme.yellow}`};
      }
      .tagCount {
        color: ${props => props.theme.black};
        background: ${props => `${props.theme.yellow}`};
      }
    }
  }
  .tagTitle {
    border-bottom: ${props => `2px solid ${props.theme.black}`};
  }
  .tagCount {
    padding: 2px 5px;
    margin-left: 5px;
    color: ${props => props.theme.black};
    background: #fff;
  }
`;

export default CategoryFilterStyles;
