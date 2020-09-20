import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  InputStyled,
  InputContainer,
} from './styles';

function Input({
  label, width, ...rest
}) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputStyled width={width} {...rest} />
    </InputContainer>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Input.defaultProps = {
  width: '350px',
};

export default Input;
