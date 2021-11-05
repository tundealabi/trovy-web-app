import currencyFormatter from 'currency-formatter';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  LoanBalanceContainer,
  LoanBalanceTitle,
  LoanBalanceValueText,
  LoanInterfaceContainer,
  LoanInterfaceDetails,
  LoanInterfaceDurationText,
  LoanInterfaceStatusText,
  LoanInterfaceSummary,
} from './LoanInterface.styled';
import LoanInterfaceTable from '../loan_interface_table/LoanInterfaceTable';
import { ILoanModel } from '../../../../db/models/loan/loan-model.interface';
import { calculateLoanBalance } from '../../dashboard-loan.utils';

const LoanInterface = (loanData: ILoanModel) => {
  const { loanStatus, loanAmount, loanSchedule } = loanData;
  return (
    <LoanInterfaceContainer>
      <Accordion>
        <LoanInterfaceSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <LoanInterfaceStatusText iscompleted={loanStatus === 'completed'}>
            status:
            <span>{loanStatus}</span>
          </LoanInterfaceStatusText>
          <LoanInterfaceDurationText>
            amount:
            <span>{currencyFormatter.format(Number(loanAmount), { code: '' })}</span>
          </LoanInterfaceDurationText>
        </LoanInterfaceSummary>
        <LoanInterfaceDetails>
          <LoanBalanceContainer>
            <LoanBalanceTitle>loan balance:</LoanBalanceTitle>
            <LoanBalanceValueText>{calculateLoanBalance(loanSchedule)}</LoanBalanceValueText>
          </LoanBalanceContainer>
          <LoanInterfaceTable {...loanData} />
        </LoanInterfaceDetails>
      </Accordion>
    </LoanInterfaceContainer>
  );
};

export default LoanInterface;
