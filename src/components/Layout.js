import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

const theme = {
  black: '#262626',
  yellow: '#ffc600',
  lightgrey: '#efefef',
  grey: '#3a3a3a',
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyles />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

export default Layout;

const StyledPage = styled.div`
  background: #ffffff;
  color: ${props => props.theme.black};
`;

const Content = styled.div`
  max-width: 900px;
  min-heigth: 40vw;
  padding: 6rem 1 rem;
  margin: 0 auto;
`;
