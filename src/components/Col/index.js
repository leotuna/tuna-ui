import styled from 'styled-components';
import constants from '../../utils/constants';

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  flex-wrap: ${(props) => props.flexWrap};
  max-width: ${(props) => props.maxWidth};
  @media only screen and (max-width: ${constants.mobileWidth}) {
    flex-direction: ${props => props.reverseOnMobile ? 'row': 'column'};
    justify-content: ${(props) => props.justifyContentOnMobile ? props.justifyContentOnMobile : props.justifyContent};
    align-items: ${(props) => props.alignItemsOnMobile ? props.alignItemsOnMobile : props.alignItems};
  }
`;

export default Col;
