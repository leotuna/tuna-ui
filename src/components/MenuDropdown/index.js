import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

function MenuDropdown({  children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

MenuDropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuDropdown;
