import currencyFormatter from 'currency-formatter';
import Grid from '@mui/material/Grid';
import portfolioData from './portfolio.data.json';
import {
  DashboardPortfolioContainer,
  DashboardPortfolioValueContainer,
  DashboardPortfolioValue,
} from './DashboardPortfolio.styled';
import PortfolioCard from './components/portfolio_card/PortfolioCard';
import getTotalPortfolioValue from './dashboard-portfolio.utils';

const DashboardPortfolio = () => (
  <DashboardPortfolioContainer>
    <DashboardPortfolioValueContainer>
      <DashboardPortfolioValue>
        Portfolio Value: {currencyFormatter.format(getTotalPortfolioValue(), { symbol: '$' })}
      </DashboardPortfolioValue>
    </DashboardPortfolioValueContainer>
    <Grid container spacing={2}>
      {portfolioData.portfolios.map(({ id, ...others }) => (
        <Grid key={id} item xs={12} sm={6}>
          <PortfolioCard {...others} />
        </Grid>
      ))}
    </Grid>
  </DashboardPortfolioContainer>
);

export default DashboardPortfolio;
