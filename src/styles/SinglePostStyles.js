import styled from 'styled-components';

const SinglePostStyles = styled.div`
  .singlePostMeta {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    margin-bottom: 15px;
    line-height: 1.2;
    .tagTitle {
      background: #6c757d;
      color: #fff;
      text-transform: uppercase;
      padding: 0px 8px;
      font-weight: 900;
    }
    .postDate {
      color: #6c757d;
    }
    svg {
      width: 5px;
    }
  }
  hr {
    border: none;
    height: 1px;
    background-color: rgb(237, 237, 237);
    margin: 20px 0;
  }
  .moreItems {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export default SinglePostStyles;
