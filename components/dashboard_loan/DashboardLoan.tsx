import LoanInterface from './components/loan_interface/LoanInterface';
import {
  DashboardLoanContainer,
  DashboardTotalLoanContainer,
  DashboardTotalLoanValueText,
} from './DashboardLoan.styled';

const DashboardLoan = () => {
  const totalLoan = 300;
  return (
    <DashboardLoanContainer>
      <DashboardTotalLoanContainer>
        <DashboardTotalLoanValueText>Total Loan: {totalLoan}</DashboardTotalLoanValueText>
      </DashboardTotalLoanContainer>
      <LoanInterface />
    </DashboardLoanContainer>
  );
};

export default DashboardLoan;
