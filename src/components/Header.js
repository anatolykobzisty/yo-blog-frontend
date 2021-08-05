import React from 'react';
import styled from 'styled-components';
import { RiZcoolFill } from 'react-icons/ri';
import { Link } from 'gatsby';

const Header = () => (
  <Container>
    <Wrapper>
      <Link to="/">
        <h1>
          <RiZcoolFill /> Yo, Blog !
        </h1>
      </Link>
    </Wrapper>
  </Container>
);

const Container = styled.header`
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  h1 {
    font-size: 28px;
    font-family: 'Balsamiq Sans', cursive;
    font-weight: 700;
    margin: 0;
    display: flex;
    align-items: center;
  }

  a {
    color: ${props => props.theme.black};
    text-decoration: none;
    svg {
      fill: ${props => props.theme.yellow};
      width: 80px;
      height: 100px;
    }
  }
`;

export default Header;
