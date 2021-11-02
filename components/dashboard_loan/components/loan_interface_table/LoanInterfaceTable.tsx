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
} from './LoanInterfaceTable.styled';
import ILoanModel from '../../../../db/models/loan/loan-model.interface';
import PaystackPayButton from '../paystack_pay_button/PaystackPayButton';

interface ISchedule {
  _id: string;
  month: string;
  proratedPayment: string;
  status: string;
}

const disablePayButton = (idx: number, data: Array<ISchedule>) => {
  if (idx > 0) {
    return data[idx - 1].status !== 'completed';
  }
  return false;
};

const LoanInterfaceTable = (loanData: ILoanModel) => {
  const { _id, loanSchedule } = loanData;
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
          {loanSchedule.map((schedule, idx, arrayData) => (
            <TableRow
              key={schedule._id as string}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <LoanInterfaceTableBodyCell component='th' scope='row'>
                {schedule.month}
              </LoanInterfaceTableBodyCell>
              <LoanInterfaceTableBodyCell align='center'>
                {schedule.status}
              </LoanInterfaceTableBodyCell>
              <LoanInterfaceTableBodyCell align='center'>
                {schedule.status === 'completed' ? (
                  <LoanInterfaceActionButton>
                    <CheckCircleIcon />
                  </LoanInterfaceActionButton>
                ) : (
                  <PaystackPayButton
                    amount={Number(schedule.proratedPayment)}
                    reference={{ loanId: _id as string, scheduleId: schedule._id as string }}
                    disabled={disablePayButton(idx, arrayData)}
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
