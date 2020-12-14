import React from 'react';
import styled from 'styled-components';

function PopupImage({ image }) {
  return <Image src={image} />;
}

export default PopupImage;

const Image = styled.img`
  width: 100%;
  height: 205px;
  object-fit: cover;
  object-position: center;
`;
