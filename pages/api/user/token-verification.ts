import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../db/db-connect';
import UserAuthToken from '../../../db/models/user_auth_token/user-auth-token.model';
import { verifyToken } from '../../../lib/two_factor_auth/two-factor-auth';

const userTokenVarificationHandler = nc<NextApiRequest, NextApiResponse>();

userTokenVarificationHandler.post(async (req, res) => {
  try {
    dbConnect();
    const { userId, userToken } = req.body;
    const auth = await UserAuthToken.findOne({
      userId,
    }).select('userTokenSecret');
    if (auth) {
      const isVerified = verifyToken(userToken, auth.userTokenSecret);
      return res.send(isVerified);
    }
    return res.send(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log('login-user-err', err);
    return res.send(null);
  }
});

export default userTokenVarificationHandler;
