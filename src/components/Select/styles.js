import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
`;

export const SelectStyled = styled.select`
  display: block;
  width: ${(props) => props.width};
  border: 1px solid #bfbed0;
  padding: 10px;
  &:focus {
    border: 1px solid black;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
