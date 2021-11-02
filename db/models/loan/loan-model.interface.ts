interface ILoanModel {
  _id: string;
  userId: string;
  loanAmount: string;
  loanPercentage: string;
  loanSpreadDuration: string;
  loanDate: string;
  loanStatus: 'active' | 'completed' | 'due';
  loanSchedule: Array<{
    _id: string;
    month: string;
    proratedPayment: string;
    status: string;
  }>;
}

export default ILoanModel;
