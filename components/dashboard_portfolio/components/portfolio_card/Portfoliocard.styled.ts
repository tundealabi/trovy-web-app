import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const PortfolioCardContainer = styled(Card)`
  /* border: 1px solid beige; */
`;
const PortfolioCardContentContainer = styled(CardContent)`
  border: 1px solid green;
`;

const PortfolioSymbolText = styled(Typography)`
  color: #2dd882;
  font-weight: bold;
`;
const PortfolioInformationContainer = styled.div`
  text-align: center;
`;
const PortfolioInformationText = styled(Typography)`
  padding: 0.2rem 0;
`;

export {
  PortfolioCardContainer,
  PortfolioCardContentContainer,
  PortfolioSymbolText,
  PortfolioInformationContainer,
  PortfolioInformationText,
};
