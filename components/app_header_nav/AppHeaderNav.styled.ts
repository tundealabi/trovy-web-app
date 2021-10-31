import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import styled from 'styled-components';

const AppHeaderNavContainer = styled(AppBar)``;

const AppHeaderNavToolBar = styled(ToolBar)`
  justify-content: space-between;
  /* fallback for old browsers */
  background: #abbaab;
  /* for Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #ffffff, #abbaab);
  /* for W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #ffffff, #abbaab);
  padding: 0 1rem;
  box-shadow: 0px 1px 2px 1px rgba(134, 134, 134, 0.1);

  @media (min-width: 510px) {
    padding: 0 2rem;
  }
  @media (min-width: 910px) {
    padding: 0 9.3rem;
  }
`;

const AppHeaderNavLogoContainer = styled.div`
  /* border: 1px solid yellow; */
  cursor: pointer;
  /* margin-left: 4rem; */
  flex-basis: 15%;
  @media (max-width: 500px) {
    flex-basis: 28%;
  }
`;

const AppHeaderNavUserPresenceContainer = styled.div``;

export {
  AppHeaderNavContainer,
  AppHeaderNavToolBar,
  AppHeaderNavLogoContainer,
  AppHeaderNavUserPresenceContainer,
};
