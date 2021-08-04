import styled from 'styled-components';

const FooterStyles = styled.div`
  background: ${props => props.theme.black};
  color: #fff;
  .wrapperForm {
    max-width: 485px;
    margin: 0 auto;
    padding: 60px 0;
    .formAction {
      color: ${props => props.theme.yellow};
      font-weight: 900;
    }
    legend {
      margin-bottom: 15px;
    }
  }
  .wrapperMain {
    background: #fff;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    color: ${props => props.theme.black};
    a {
      color: ${props => props.theme.black};
    }
  }
`;

export default FooterStyles;
