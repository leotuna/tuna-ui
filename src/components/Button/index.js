import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: ${(props) => (props.noBorder ? '1px solid transparent' : '1px solid #fd0')} ;
  border-radius: 0px;
  font-weight: 700;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  padding: 10px 0;
  color: black;
  background-color: ${(props) => (props.transparent ? 'transparent' : '#fd0')};
`;

export default Button;
