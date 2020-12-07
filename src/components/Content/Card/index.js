import React from 'react';
import styled from 'styled-components';

const Card = ({ image }) => {
  return (
    <Wrapper>
      <Image src={image} alt={`Интресные фото у вас`}></Image>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.li`
  list-style-type: none;
`;

const Image = styled.img`
  width: 100%;
`;
