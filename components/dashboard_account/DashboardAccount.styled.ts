import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const DashboardAccountContainer = styled(Box)`
  padding: 0 1rem;
`;
const DashboardAccountDetailsContainer = styled(Paper)``;
const DashboardAccountDetailsHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted grey;
  margin-bottom: 1rem;
`;
const DashboardAccountDetailsHeaderText = styled(Typography)`
  text-transform: uppercase;
`;
const DashboardAccountDetailsHeaderActionButton = styled(IconButton)`
  > .MuiSvgIcon-root {
    color: #2dd882;
  }
`;
const DashboardAccountDetailsBodyText = styled(Typography)`
  padding-bottom: 1rem;

  > span {
    display: block;
  }
`;
const DashboardAccountChangePasswordButton = styled(IconButton)`
  color: #2dd882;
  text-transform: capitalize;
  font-size: 1.24rem;
  margin-top: 1rem;
`;

export {
  DashboardAccountContainer,
  DashboardAccountDetailsContainer,
  DashboardAccountDetailsHeader,
  DashboardAccountDetailsHeaderText,
  DashboardAccountDetailsHeaderActionButton,
  DashboardAccountDetailsBodyText,
  DashboardAccountChangePasswordButton,
};
