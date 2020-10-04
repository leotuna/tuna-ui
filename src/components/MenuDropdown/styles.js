import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  width: 200px;
  background-color: white;
  border: 1px solid #dae0e6;
  border-radius: 5px;
  padding: 1rem;
  overflow: hidden;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      font-size: 18px;
      padding: 7.5px 0px;
      div {
        height: 100%;
        width: 100%;
        &:hover {
          filter: brightness(1);
          cursor: pointer;
        }
      }
    }

  }
`;
