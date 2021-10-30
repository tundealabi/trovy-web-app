import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const LoanInterfaceContainer = styled.div`
  /* border: 1px solid green; */
`;
const LoanInterfaceSummary = styled(AccordionSummary)`
  /* border: 1px solid green; */
  display: flex;
  text-transform: capitalize;
  > .MuiAccordionSummary-content {
    justify-content: space-between;
  }
`;
const LoanInterfaceStatusText = styled(Typography)`
  flex-basis: 50%;

  > span {
    color: orange;
    padding-left: 0.43rem;
  }
`;
const LoanInterfaceDurationText = styled(Typography)`
  flex-basis: 50%;
  > span {
    padding-left: 0.43rem;
    white-space: nowrap;
  }
`;
const LoanInterfaceDetails = styled(AccordionDetails)``;

export {
  LoanInterfaceContainer,
  LoanInterfaceSummary,
  LoanInterfaceDetails,
  LoanInterfaceStatusText,
  LoanInterfaceDurationText,
};
