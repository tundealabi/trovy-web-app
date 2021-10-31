import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../db/db-connect';
import User from '../../../db/models/user/user-model';
import UserPassword from '../../../db/models/user_password/user-password.model';

const loginHandler = nc<NextApiRequest, NextApiResponse>();

loginHandler.post(async (req, res) => {
  try {
    dbConnect();
    const user = await User.findOne({
      email: req.body.email,
    }).select(['_id', 'email']);
    if (user) {
      const userPwd = await UserPassword.findOne({
        userId: user._id,
      });
      if (userPwd) {
        const comparePassword = await userPwd.compareUserPwd(req.body.password);
        if (!comparePassword) {
          throw new Error('Wrong login details');
        }
      }

      return res.send(user.email);
    }
    throw new Error('Wrong login details');
  } catch (err: any) {
    // console.log('login-user-err', err);
    return res.json({
      error: true,
      errorMessage: err.message,
    });
  }
});

export default loginHandler;
