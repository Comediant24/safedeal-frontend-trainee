import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from './Input/index';

const PopupForm = ({ changeValue, name, value, ...rest }) => {
  console.log('rest', rest);
  const [values, setValues] = useState({});

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({});
  };

  return (
    <Wrapper {...rest}>
      <Fieldset>
        <StyledFormInput
          name="userName"
          onChange={handleInputChange}
          value={values.userName}
          placeholder="Ваше имя"
        />
        <StyledFormInput
          name="userComment"
          onChange={handleInputChange}
          value={values.userComment}
          placeholder="Ваш комментарий"
        />
      </Fieldset>
      <SubmitButton
        onClick={handleSubmit}
        type="submit"
        aria-label={'Оставить комментарий'}
      >
        Оставить комментарий
      </SubmitButton>
    </Wrapper>
  );
};

export default PopupForm;

const Wrapper = styled.form`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (max-width: 450px) {
    padding: 0 20px;
    order: 3;
  }
`;

const StyledFormInput = styled(FormInput)`
  height: 30px;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  padding: 8px 11px 7px;
  border-radius: 3px;
  width: 100%;

  ::placeholder {
    color: #cccccc;
  }
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;
  border: 0;
`;

const SubmitButton = styled.button`
  height: 30px;
  border: none;
  background: #4997d0;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
`;
