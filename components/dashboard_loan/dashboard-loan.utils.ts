import currencyFormatter from 'currency-formatter';
import { ILoanModel, ILoanScheduleModel } from '../../db/models/loan/loan-model.interface';

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

const calculateLoanBalance = (loanSchedules: Array<ILoanScheduleModel>) => {
  if (!loanSchedules) {
    return currencyFormatter.format(0, { symbol: '$' });
  }
  const balance = loanSchedules.reduce((prevV, currV) => {
    if (currV.status === 'active') {
      prevV += Number(currV.proratedPayment);
    }
    return prevV;
  }, 0);
  return currencyFormatter.format(balance, { symbol: '$' });
};

export { calculateTotalLoan, calculateLoanBalance };
