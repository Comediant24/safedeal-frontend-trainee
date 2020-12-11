import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Content from '../Content/index';
import Header from '../Header/index';

function App() {
  return (
    <Wrapper>
      <Header />
      <Content />
      <GlobalStyled />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 729px;
  min-width: 330px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const GlobalStyled = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
