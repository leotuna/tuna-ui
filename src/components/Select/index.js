import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  SelectStyled,
  InputContainer,
} from './styles';

function Input({
  margin, label, width, children, ...rest
}) {
  return (
    <InputContainer margin={margin}>
      <Label>{label}</Label>
      <SelectStyled width={width} {...rest}>
        {children}
      </SelectStyled>
    </InputContainer>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Input.defaultProps = {
  width: '350px',
  margin: '0 0',
};

export default Input;
