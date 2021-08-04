import styled from 'styled-components';

const FormStyles = styled.form`
  display: flex;
  justify-content: space-between;
  input {
    font-size: 16px;
    background: rgb(22, 22, 22);
    border: 3px solid #fff;
    color: rgb(255, 255, 255);
    height: 35px;
    padding: 2px 10px;
    min-width: 300px;
  }
  button {
    background: ${props => props.theme.black};
    border: ${props => `3px solid ${props.theme.yellow}`};
    color: #fff;
    height: 35px;
    font-size: 16px;
    min-width: 175px;
    &:hover {
      background: ${props => props.theme.yellow};
      color: ${props => props.theme.black};
      cursor: pointer;
    }
  }
  .garbage {
    display: none;
  }
`;

export default FormStyles;
