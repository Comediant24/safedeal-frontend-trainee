import React from 'react';
import styled from 'styled-components';

const FormInput = ({ name, onChange, value, ...rest }) => {
  const handleInputChange = (e) => {
    onChange(e);
  };

  return (
    <Input
      {...rest}
      name={name}
      onChange={handleInputChange}
      value={value || ''}
      maxLength="120"
    />
  );
};

export default FormInput;

const Input = styled.input``;
