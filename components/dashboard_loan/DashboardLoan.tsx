import { useQuery } from 'react-query';
import Skeleton from '@mui/material/Skeleton';
import ILoanModel from '../../db/models/loan/loan-model.interface';
import { showGlobalModal } from '../../redux/global_modal/global-modal.slice';
import { useAppDispatch } from '../../redux/hooks';
import { getLoansFromApi } from '../../utils/api_helpers/api_loan/api-loan.helper';
import LoanInterface from './components/loan_interface/LoanInterface';
import calculateTotalLoan from './dashboard-loan.utils';
import {
  DashboardCreateLoanButton,
  DashboardLoanContainer,
  DashboardNoLoanContainer,
  DashboardNoLoanText,
  DashboardTotalLoanContainer,
  DashboardTotalLoanValueText,
} from './DashboardLoan.styled';

const DashboardLoan = () => {
  const dispatch = useAppDispatch();
  const loaderData = ['loading', 'loading', 'loading'];
  const { isLoading, data } = useQuery<Array<ILoanModel>>('getLoans', getLoansFromApi);
  const handleShowLoanForm = () => dispatch(showGlobalModal('take_loan'));

  return (
    <DashboardLoanContainer>
      <DashboardTotalLoanContainer>
        <DashboardCreateLoanButton onClick={handleShowLoanForm}>
          take loan
        </DashboardCreateLoanButton>
        <DashboardTotalLoanValueText>
          Total Loan: {data ? calculateTotalLoan(data) : 0}
        </DashboardTotalLoanValueText>
      </DashboardTotalLoanContainer>
      {data && !data.length ? (
        <DashboardNoLoanContainer>
          <DashboardNoLoanText>
            You currently do not have any loan. Click on the take a loan button.
          </DashboardNoLoanText>
        </DashboardNoLoanContainer>
      ) : null}
      {data && !isLoading
        ? data.map((loan) => <LoanInterface key={loan._id as string} {...loan} />)
        : loaderData.map((load, idx) => (
            <Skeleton
              key={`${load} - ${idx * (2 / 10)}`}
              sx={{ bgcolor: 'grey', marginBottom: '0.73rem' }}
              variant='rectangular'
              width='100%'
              height={50}
            />
          ))}
    </DashboardLoanContainer>
  );
};

export default DashboardLoan;
