import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const DashboardLoanContainer = styled.div`
  padding: 1rem 0.52rem;
`;
const DashboardTotalLoanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;

const DashboardTotalLoanValueText = styled(Typography)`
  font-weight: bold;
`;
const DashboardCreateLoanButton = styled(Button)`
  color: #2dd882;
`;

const DashboardNoLoanContainer = styled(Box)`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;
const DashboardNoLoanText = styled(Typography)`
  font-weight: bold;
`;

export {
  DashboardLoanContainer,
  DashboardTotalLoanContainer,
  DashboardTotalLoanValueText,
  DashboardCreateLoanButton,
  DashboardNoLoanContainer,
  DashboardNoLoanText,
};
