import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  LoanInterfaceTableCell,
  LoanInterfaceTableBodyCell,
  LoanInterfaceActionButton,
  LoanInterfaceActionPayChip,
} from './LoanInterfaceTable.styled';

function createData(month: string, status: string, completed: boolean) {
  return { month, status, completed };
}

const rows = [
  createData('january', 'active', false),
  createData('february', 'due', false),
  createData('december', 'completed', true),
  createData('july', 'due', false),
  createData('november', 'active', false),
];

// eslint-disable-next-line no-console
const handlePayment = () => console.log('launch paystack');

const LoanInterfaceTable = () => {
  const minWidth = 250;
  return (
    <TableContainer>
      <Table sx={{ minWidth }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <LoanInterfaceTableCell>month</LoanInterfaceTableCell>
            <LoanInterfaceTableCell align='center'>status</LoanInterfaceTableCell>
            <LoanInterfaceTableCell align='center'>action</LoanInterfaceTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.month} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <LoanInterfaceTableBodyCell component='th' scope='row'>
                {row.month}
              </LoanInterfaceTableBodyCell>
              <LoanInterfaceTableBodyCell align='center'>{row.status}</LoanInterfaceTableBodyCell>
              <LoanInterfaceTableBodyCell align='center'>
                {row.completed ? (
                  <LoanInterfaceActionButton>
                    <CheckCircleIcon />
                  </LoanInterfaceActionButton>
                ) : (
                  <LoanInterfaceActionPayChip
                    label='pay now'
                    variant='outlined'
                    onClick={handlePayment}
                  />
                )}
              </LoanInterfaceTableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LoanInterfaceTable;
