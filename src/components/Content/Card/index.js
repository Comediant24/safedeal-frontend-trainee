import React from 'react';
import styled from 'styled-components';

const Card = ({ card, onCardClick }) => {
  const handleClick = () => {
    onCardClick(card.id);
  };

  return (
    <Wrapper>
      <Image
        src={card.url}
        alt={`Интресные фото у вас`}
        onClick={handleClick}
      ></Image>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.li`
  list-style-type: none;
`;

const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;
