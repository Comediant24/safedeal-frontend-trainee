import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getImages, getImage } from '../../api/api';
import Popup from '../Popup';
import Card from './Card/index';

const Content = () => {
  const [cards, setCards] = useState([]);
  const [selectCard, setSelectCard] = useState([]);
  console.log('selectCards', selectCard);

  useEffect(() => {
    getImages().then((images) => setCards(images));
  }, []);

  const handleCardClick = (card) => {
    getImage(card).then((imgData) =>
      setSelectCard({ ...imgData, isOpen: true })
    );
  };

  const handleClosePopup = () => {
    setSelectCard({});
  };

  return (
    <Wrapper>
      <List>
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClick={handleCardClick} />
        ))}
      </List>
      <Popup card={selectCard} onClose={handleClosePopup} />
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.section`
  width: 100%;
  position: relative;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 21px;
  grid-template-columns: repeat(auto-fit, minmax(229px, 1fr));
`;
