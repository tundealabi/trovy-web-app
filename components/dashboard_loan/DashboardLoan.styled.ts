import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const DashboardLoanContainer = styled.div`
  padding: 1rem 0.52rem;
`;
const DashboardTotalLoanContainer = styled.div`
  text-align: end;
  padding-bottom: 1rem;
`;

const DashboardTotalLoanValueText = styled(Typography)`
  font-weight: bold;
`;

export { DashboardLoanContainer, DashboardTotalLoanContainer, DashboardTotalLoanValueText };
