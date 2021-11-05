import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
const LoanInterfaceStatusText = styled(Typography)<{ iscompleted: boolean }>`
  flex-basis: 50%;
  > span {
    color: ${(props) => (props.iscompleted ? '#2dd882' : 'orange')};
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

const LoanBalanceContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed grey;
`;
const LoanBalanceTitle = styled(Typography)`
  text-transform: capitalize;
  color: orange;
`;
const LoanBalanceValueText = styled(Typography)``;

export {
  LoanInterfaceContainer,
  LoanInterfaceSummary,
  LoanInterfaceDetails,
  LoanInterfaceStatusText,
  LoanInterfaceDurationText,
  LoanBalanceContainer,
  LoanBalanceTitle,
  LoanBalanceValueText,
};
