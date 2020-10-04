import React from 'react';
import PropTypes from 'prop-types';
import { NavStyled } from './styles';

function Nav({ children, height }) {
  return (
    <NavStyled height={height}>{children}</NavStyled>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
}

Nav.defaultProps = {
  height: '55px',
}

export default Nav;