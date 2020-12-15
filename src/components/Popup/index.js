import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PopupImage from './Image';
import PopupForm from './Form';
import PopupComments from './Comments';
import close from '../../images/close.svg';
import { addComment } from '../../api/api';

const Popup = ({ card, onClose }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(card.comments);
  }, [card]);

  const handleSubmit = (data) => {
    addComment(card.id, data);
    setComments([
      {
        text: data.comment,
        id: Math.floor(Math.random() * 100),
        date: Date.parse(new Date()),
      },
      ...comments,
    ]);
  };

  return (
    <Wrapper isOpen={card.isOpen}>
      <Overlay onClick={onClose} />
      <PopupBody>
        <PopupImage image={card.url} />
        <PopupForm changeValue={handleSubmit} />
        <PopupComments comments={comments} />
        <CloseButton onClick={onClose} />
      </PopupBody>
    </Wrapper>
  );
};

export default Popup;

const PopupBody = styled.div`
  max-width: 619px;
  min-width: 320px;
  height: 425px;
  background-color: #ffffff;
  z-index: 1;
  padding: 30px 60px 30px 30px;
  box-sizing: border-box;
  display: grid;
  column-gap: 14px;
  row-gap: 30px;
  grid-template-columns: minmax(260px, 331px) minmax(100px, 184px);
  position: relative;

  @media screen and (max-width: 550px) {
    padding: 30px 40px 20px 20px;
  }

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 21px;
  right: 21px;
  width: 20px;
  height: 20px;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-position: center;
  justify-self: end;
  margin-left: auto;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
`;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: visibility 0.5s, opacity 0.5s ease;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  font-size: 13px;
  line-height: 15px;
`;
