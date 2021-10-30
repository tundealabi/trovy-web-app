import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import styled from 'styled-components';

const DashboardPageContainer = styled.main`
  background-color: #ededed;
  /* background-color: green; */
  min-height: 100vh;
  padding-top: 4.72rem;
`;

const DashboardPageOverviewContainer = styled(Paper)`
  /* border: 1px solid hotpink; */
  background-color: #fff;
  width: 94vw;
  margin: 0 auto;
  min-height: 80vh;

  @media (min-width: 700px) {
    width: 75vw;
  }
  @media (min-width: 1200px) {
    width: 55vw;
  }
`;

const DashboardNavigationContainer = styled(Box)`
  color: black;
  border-bottom: 1px solid #ededed;
  padding: 0.62rem 0 0.62rem 0.72rem;
`;

const DashboardNavigationActionButton = styled(Button)`
  border-radius: 40px;
  border-color: #2dd882;
  color: #000;
  text-transform: capitalize;
  font-size: 1.32rem;
  min-width: fit-content;
  width: 42vw;
  :hover {
    border-color: #2dd882;
  }

  @media (min-width: 700px) {
    width: 25vw;
  }
  @media (min-width: 1200px) {
    width: 20vw;
  }
  @media (min-width: 1400px) {
    width: 10vw;
  }
`;

const DashboardNavigationMenu = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  margin-top: 0.12rem;
  background-color: #ededed;
  position: absolute;
  z-index: 999;
  min-width: fit-content;
  width: 42vw;
  border: 1px solid #2dd882;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%),
    0px 3px 14px 2px rgb(0 0 0 / 12%);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  @media (min-width: 700px) {
    width: 25vw;
  }
  @media (min-width: 1200px) {
    width: 20vw;
  }
  @media (min-width: 1400px) {
    width: 10vw;
  }
`;

const DashboardNavigationItemButton = styled(Button)`
  cursor: pointer;
  display: block;
  text-align: left;
  color: #000;
`;

const DashboardContentContainer = styled(Box)`
  /* border: 1px solid green; */
`;
const DashboardNavigationTabContext = styled(TabContext)``;
const DashboardNavigationTabList = styled(TabList)``;
const DashboardNavigationTab = styled(Tab)``;

export {
  DashboardPageContainer,
  DashboardPageOverviewContainer,
  DashboardNavigationContainer,
  DashboardNavigationActionButton,
  DashboardNavigationMenu,
  DashboardNavigationItemButton,
  DashboardContentContainer,
  DashboardNavigationTabContext,
  DashboardNavigationTabList,
  DashboardNavigationTab,
};
