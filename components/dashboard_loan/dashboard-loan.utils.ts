import currencyFormatter from 'currency-formatter';
import ILoanModel from '../../db/models/loan/loan-model.interface';

const calculateTotalLoan = (loans: Array<ILoanModel>) => {
  if (!loans) {
    return 0;
  }
  const totalAmount = loans.reduce((prevV, currV) => {
    prevV += Number(currV.loanAmount);
    return prevV;
  }, 0);
  return currencyFormatter.format(totalAmount, { symbol: '$' });
};

export default calculateTotalLoan;
