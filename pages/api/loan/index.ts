import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import nc from 'next-connect';
import dbConnect from '../../../db/db-connect';
import Loan from '../../../db/models/loan/loan.model';

const getLoansHandler = nc<NextApiRequest, NextApiResponse>();

getLoansHandler.get(async (req, res) => {
  const errorMessage = 'Error fetching loans';
  try {
    const session = await getSession({ req });
    if (session) {
      dbConnect();
      const loans = await Loan.find({
        userId: session.user._id,
      });
      return res.json(loans);
    }
    throw new Error(errorMessage);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log('login-user-err', err);
    return res.json({
      error: true,
      errorMessage: err.message === errorMessage ? errorMessage : 'something went wrong',
    });
  }
});

export default getLoansHandler;
