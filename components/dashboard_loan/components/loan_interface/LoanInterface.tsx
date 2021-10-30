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

const LoanInterface = () => {
  const monthCount = 4;
  return (
    <LoanInterfaceContainer>
      <Accordion>
        <LoanInterfaceSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <LoanInterfaceStatusText>
            status:
            <span>active</span>
          </LoanInterfaceStatusText>
          <LoanInterfaceDurationText>
            duration:
            <span>{monthCount} months</span>
          </LoanInterfaceDurationText>
        </LoanInterfaceSummary>
        <LoanInterfaceDetails>
          <LoanInterfaceTable />
        </LoanInterfaceDetails>
      </Accordion>
    </LoanInterfaceContainer>
  );
};

export default LoanInterface;
