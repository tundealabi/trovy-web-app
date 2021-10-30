import IPortfolioCard from './portfolio-card.interface';
import {
  PortfolioCardContainer,
  PortfolioCardContentContainer,
  PortfolioSymbolText,
  PortfolioInformationContainer,
  PortfolioInformationText,
} from './Portfoliocard.styled';

const PortfolioCard = (props: IPortfolioCard) => {
  const { symbol, totalQuantity, equityValue, pricePerShare } = props;
  return (
    <PortfolioCardContainer>
      <PortfolioCardContentContainer>
        <PortfolioSymbolText>{symbol}</PortfolioSymbolText>
        <PortfolioInformationContainer>
          <PortfolioInformationText>Total Quantity: {totalQuantity}</PortfolioInformationText>
          <PortfolioInformationText>Equity Value: {equityValue}</PortfolioInformationText>
          <PortfolioInformationText>Price Per Share: {pricePerShare}</PortfolioInformationText>
        </PortfolioInformationContainer>
      </PortfolioCardContentContainer>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;
