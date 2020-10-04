import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    background: white;
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NavStyled = styled.nav`
  background-color: white;
  height: ${props => props.height};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  border-bottom: 1px solid #dae0e6;
  animation: ${animation} .25s ease-in-out;
`;
