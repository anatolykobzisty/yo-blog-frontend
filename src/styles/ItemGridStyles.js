import styled from 'styled-components';

const ItemGridStyles = styled.div`
  display: grid;
  grid-template-rows: 220px auto;
  background: ${props => props.theme.black};
  color: #fff;
  box-shadow: 0 0 0 1px #d7d7d7;
  border: 2px solid #fff;
  .itemGridWrap {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 35px 15px 20px;
    .postTitle {
      position: absolute;
      top: -18px;
      left: 15px;
      z-index: 2;
    }
    .postBody {
      margin-bottom: 10px;
    }
    .postUpdated {
      color: ${props => props.theme.yellow};
      font-size: 12px;
      font-weight: 300;
    }
    a {
      color: ${props => props.theme.black};
    }
    p {
      font-size: 14px;
      margin: 0;
    }
    h2 {
      margin-bottom: 0;
      text-align: center;
      text-transform: uppercase;
      background-color: #fff;
      border: 2px solid #000;
      display: inline-block;
      padding: 5px 15px;
      box-shadow: 4px 4px 0 #000;
    }
    .categoryTag {
      font-size: 11px;
      font-weight: 900;
      padding: 2px 5px;
      background: ${props => props.theme.yellow};
      color: ${props => props.theme.black};
      text-transform: uppercase;
    }
  }
`;

export default ItemGridStyles;
