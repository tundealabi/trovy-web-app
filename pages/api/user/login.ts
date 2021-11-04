import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../db/db-connect';
import User from '../../../db/models/user/user.model';
import UserAuthToken from '../../../db/models/user_auth_token/user-auth-token.model';
import UserPassword from '../../../db/models/user_password/user-password.model';
import sendTwoFactorAuthCodeMail from '../../../lib/mailing/utils/mail-2fa-code';
import {
  generateToken,
  generateUserTokenSecret,
} from '../../../lib/two_factor_auth/two-factor-auth';

const loginHandler = nc<NextApiRequest, NextApiResponse>();

loginHandler.post(async (req, res) => {
  try {
    dbConnect();
    const user = await User.findOne({
      email: req.body.email,
    }).select(['_id', 'email', 'lastName']);
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
      const userAuthToken = await UserAuthToken.findOneAndUpdate(
        {
          userId: user._id,
        },
        { userTokenSecret: generateUserTokenSecret() },
        { new: true, upsert: true }
      );
      const generatedUserToken = await generateToken(userAuthToken?.userTokenSecret as string);
      sendTwoFactorAuthCodeMail({
        recipientMail: user.email,
        recipientName: user.lastName,
        token: generatedUserToken,
      });
      return res.json({
        userId: user._id,
        email: user.email,
      });
    }
    throw new Error('Wrong login details');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log('login-user-err', err);
    return res.json({
      error: true,
      errorMessage: err.message,
    });
  }
});

export default loginHandler;
