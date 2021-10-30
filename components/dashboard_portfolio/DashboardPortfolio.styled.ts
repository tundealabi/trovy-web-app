import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const DashboardPortfolioContainer = styled.div`
  padding: 1rem 0.52rem;
`;
const DashboardPortfolioValueContainer = styled.div`
  text-align: end;
  padding-bottom: 1rem;
`;

const DashboardPortfolioValue = styled(Typography)`
  font-weight: bold;
`;

export { DashboardPortfolioContainer, DashboardPortfolioValueContainer, DashboardPortfolioValue };
