import currencyFormatter from 'currency-formatter';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  LoanInterfaceContainer,
  LoanInterfaceDetails,
  LoanInterfaceDurationText,
  LoanInterfaceStatusText,
  LoanInterfaceSummary,
} from './LoanInterface.styled';
import LoanInterfaceTable from '../loan_interface_table/LoanInterfaceTable';
import ILoanModel from '../../../../db/models/loan/loan-model.interface';

const LoanInterface = (loanData: ILoanModel) => {
  const { loanStatus, loanAmount } = loanData;
  return (
    <LoanInterfaceContainer>
      <Accordion>
        <LoanInterfaceSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <LoanInterfaceStatusText isCompleted={loanStatus === 'completed'}>
            status:
            <span>{loanStatus}</span>
          </LoanInterfaceStatusText>
          <LoanInterfaceDurationText>
            amount:
            <span>{currencyFormatter.format(Number(loanAmount), { code: '' })}</span>
          </LoanInterfaceDurationText>
        </LoanInterfaceSummary>
        <LoanInterfaceDetails>
          <LoanInterfaceTable {...loanData} />
        </LoanInterfaceDetails>
      </Accordion>
    </LoanInterfaceContainer>
  );
};

export default LoanInterface;
