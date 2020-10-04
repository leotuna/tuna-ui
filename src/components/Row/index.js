import styled from 'styled-components';
import constants from '../../utils/constants';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  flex-wrap: ${(props) => props.flexWrap};
  width: ${(props) => props.width};
  @media only screen and (max-width: ${constants.mobileWidth}) {
    flex-direction: ${props => props.reverseOnMobile ? 'column': 'row'};
    justify-content: ${(props) => props.justifyContentOnMobile ? props.justifyContentOnMobile : props.justifyContent};
    align-items: ${(props) => props.alignItemsOnMobile ? props.alignItemsOnMobile : props.alignItems};
  }
`;

export default Row;
