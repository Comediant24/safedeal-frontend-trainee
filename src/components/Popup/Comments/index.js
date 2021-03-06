import React from 'react';
import styled from 'styled-components';

const PopupComments = ({ className, comments = [] }) => {
  return (
    <Wrapper className={className}>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <DateComment>
            {new Date(comment.date).toLocaleString('ru').slice(0, 10)}
          </DateComment>
          <Text>{comment.text}</Text>
        </Comment>
      ))}
    </Wrapper>
  );
};

export default PopupComments;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const Comment = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const DateComment = styled.p`
  color: #999999;
`;

const Text = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
`;
