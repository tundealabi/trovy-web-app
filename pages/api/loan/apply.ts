import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { getSession } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';
import dbConnect from '../../../db/db-connect';
import Loan from '../../../db/models/loan/loan.model';
import { ILoanApplyHelper } from '../../../utils/api_helpers/api_loan/api-loan.interface';
import { getDateMonthRange } from '../../../utils/api_helpers/api_loan/api-loan.helper';

const loanApplyHandler = nc<NextApiRequest, NextApiResponse>();

loanApplyHandler.post(async (req, res) => {
  const session = await getSession({ req });
  const { loanAmount, loanPercentage, loanSpreadDuration, loanDate }: ILoanApplyHelper = req.body;
  try {
    const months = getDateMonthRange(loanDate, loanSpreadDuration);
    const monthlySpreadAmount = (Number(loanAmount) / Number(loanSpreadDuration)).toFixed(2);
    const paymentMonthlySchedule = months.map((month) => ({
      proratedPaymentId: uuidv4(),
      month: month.toLowerCase(),
      proratedPayment: monthlySpreadAmount,
      status: 'active',
    }));
    dbConnect();
    const newLoan = await Loan.create({
      userId: session?.user._id,
      loanAmount,
      loanPercentage,
      loanSpreadDuration,
      loanDate,
      loanSchedule: paymentMonthlySchedule,
    });
    return res.json(newLoan);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log('login-user-err', err);
    return res.json({
      error: true,
      errorMessage: 'something went wrong',
    });
  }
});

export default loanApplyHandler;
