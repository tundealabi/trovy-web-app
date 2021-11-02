import portfolioData from './portfolio.data.json';

const getTotalPortfolioValue = () =>
  portfolioData.portfolios.reduce((prevV, currV) => {
    prevV += currV.totalQuantity * currV.pricePerShare;
    return prevV;
  }, 0);

export default getTotalPortfolioValue;
