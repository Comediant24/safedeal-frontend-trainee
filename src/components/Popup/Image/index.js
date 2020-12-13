import React from 'react';
import styled from 'styled-components';

function PopupImage({ card }) {
  return (
    <Image src="https://i.picsum.photos/id/241/600/400.jpg?hmac=1NuJX4aVCJtG_nUAvMmzujbsM6m4GZ3p6Nyo0xi9C3w" />
  );
}

export default PopupImage;

const Image = styled.img`
  width: 100%;
  height: 205px;
  object-fit: cover;
  object-position: center;
`;
