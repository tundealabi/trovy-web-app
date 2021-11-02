import { Schema, model, Model } from 'mongoose';
import ILoanModel from './loan-model.interface';

const loanSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    loanAmount: { type: String, required: true },
    loanPercentage: { type: String, required: true },
    loanSpreadDuration: { type: String, required: true },
    loanDate: { type: String, lowercase: true, required: true },
    loanStatus: { type: String, default: 'active' },
    loanSchedule: [
      {
        month: String,
        proratedPayment: String,
        status: String,
      },
    ],
  },
  { timestamps: true }
);

// eslint-disable-next-line import/no-mutable-exports
let Loan: Model<ILoanModel>;

try {
  Loan = model<ILoanModel>('loan');
} catch (error) {
  Loan = model<ILoanModel>('loan', loanSchema);
}

export default Loan;
