import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styles';

function Button({
  children, transparent, margin, width, noBorder, ...rest
}) {
  return (
    <ButtonStyled
      width={width}
      transparent={transparent}
      margin={margin}
      noBorder={noBorder}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
  margin: PropTypes.string,
  width: PropTypes.string,
  noBorder: PropTypes.bool,
};

Button.defaultProps = {
  transparent: false,
  margin: null,
  width: '150px',
  noBorder: false,
};

export default Button;
