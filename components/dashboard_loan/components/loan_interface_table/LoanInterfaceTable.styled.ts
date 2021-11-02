import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import styled from 'styled-components';

const LoanInterfaceTableCell = styled(TableCell)`
  font-weight: bold;
  text-transform: capitalize;
`;
const LoanInterfaceTableBodyCell = styled(TableCell)`
  text-transform: capitalize;
`;

const LoanInterfaceActionButton = styled(IconButton)`
  cursor: not-allowed;
  > .MuiSvgIcon-root {
    color: #2dd882;
  }
`;

const LoanInterfaceActionPayChip = styled(Chip)`
  /* background-color: #2dd882; */
  border-color: #2dd882;
  /* color: #2dd882; */
`;

export {
  LoanInterfaceTableCell,
  LoanInterfaceTableBodyCell,
  LoanInterfaceActionButton,
  LoanInterfaceActionPayChip,
};
