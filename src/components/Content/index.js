import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getImages } from '../../api/api';
import Card from './Card/index';

const Content = () => {
  const [cards, setCards] = useState([]);
  console.log('cards', cards);

  useEffect(() => {
    getImages().then((images) => setCards(images));
  }, []);

  return (
    <Wrapper>
      <List>
        {cards.map((image) => (
          <Card key={image.id} image={image.url} />
        ))}
      </List>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.section`
  width: 100%;
`;
const List = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
