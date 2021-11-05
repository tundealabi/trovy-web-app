interface ILoanScheduleModel {
  _id: string;
  month: string;
  proratedPayment: string;
  status: string;
}
interface ILoanModel {
  _id: string;
  userId: string;
  loanAmount: string;
  loanPercentage: string;
  loanSpreadDuration: string;
  loanDate: string;
  loanStatus: 'active' | 'completed' | 'due';
  loanSchedule: Array<ILoanScheduleModel>;
}

export type { ILoanModel, ILoanScheduleModel };
