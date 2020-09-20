import styled from 'styled-components';

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  flex-wrap: ${(props) => props.flexWrap};
`;

export default Col;
