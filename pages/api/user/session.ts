import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../db/db-connect';
import User from '../../../db/models/user/user.model';

const userSessionHandler = nc<NextApiRequest, NextApiResponse>();

userSessionHandler.post(async (req, res) => {
  try {
    dbConnect();
    const user = await User.findOne({
      email: req.body.email,
    });
    return res.json(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log('login-user-err', err);
    return res.send(null);
  }
});

export default userSessionHandler;
