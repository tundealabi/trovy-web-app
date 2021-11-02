import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { getSession } from 'next-auth/react';
import dbConnect from '../../../db/db-connect';
import Loan from '../../../db/models/loan/loan.model';
import { ILoanPayHelper } from '../../../utils/api_helpers/api_loan/api-loan.interface';

const loanPayHandler = nc<NextApiRequest, NextApiResponse>();

loanPayHandler.post(async (req, res) => {
  const { loanId, proratedPaymentId }: ILoanPayHelper = req.body;
  try {
    const session = await getSession({ req });
    if (session) {
      dbConnect();
      const updatedLoan = await Loan.findByIdAndUpdate(
        loanId,
        { $set: { 'loanSchedule.$[elem].status': 'completed' } },
        {
          arrayFilters: [{ 'elem._id': proratedPaymentId }],
        }
      );
      if (updatedLoan) {
        const loanScheduleIndex = updatedLoan.loanSchedule
          // eslint-disable-next-line eqeqeq
          .findIndex((schedule) => schedule._id == proratedPaymentId);
        if (updatedLoan.loanSchedule.length - 1 === loanScheduleIndex) {
          await Loan.findByIdAndUpdate(loanId, { loanStatus: 'completed' });
        }
      }
      return res.json({ success: true });
    }
    throw new Error('Could not pay your loan');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log('login-user-err', err);
    return res.json({
      error: true,
      errorMessage: err.message,
    });
  }
});

export default loanPayHandler;
