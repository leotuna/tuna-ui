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

const Container = styled.div`
  padding: 0px 15px;
  max-width: 1080px;
  margin: 0 auto;
  animation: ${animation} .25s ease-in-out;
`;

export default Container;