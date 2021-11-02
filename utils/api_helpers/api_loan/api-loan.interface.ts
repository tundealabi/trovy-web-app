import ILoanModel from '../../../db/models/loan/loan-model.interface';

interface ILoanApplyHelper {
  loanAmount: string;
  loanPercentage: string;
  loanSpreadDuration: string;
  loanDate: string;
}

interface ILoanGetResponse extends ILoanModel {
  _id: string;
}

interface ILoanPayHelper {
  loanId: string;
  proratedPaymentId: string;
}

export type { ILoanApplyHelper, ILoanGetResponse, ILoanPayHelper };
