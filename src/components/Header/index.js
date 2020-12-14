import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Title>Test APP</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  margin: 15px 30px;
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  color: #000000;
`;
