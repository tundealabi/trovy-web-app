import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { getSession } from 'next-auth/react';
import bcrypt from 'bcrypt';
import dbConnect from '../../../db/db-connect';
import { IuserPasswordChangeHelper } from '../../../utils/api_helpers/api_user/api-user.interface';
import UserPassword from '../../../db/models/user_password/user-password.model';

const passwordChangeHandler = nc<NextApiRequest, NextApiResponse>();

passwordChangeHandler.post(async (req, res) => {
  const session = await getSession({ req });
  const { currentPassword, newPassword }: IuserPasswordChangeHelper = req.body;
  try {
    dbConnect();
    const findUserPassword = await UserPassword.findOne({ userId: session?.user._id });
    if (findUserPassword) {
      const passwordMatches = await findUserPassword.compareUserPwd(currentPassword);
      if (passwordMatches) {
        const hashNewPassword = await bcrypt.hash(newPassword, 10);
        await UserPassword.findByIdAndUpdate(
          findUserPassword._id,
          { userPwdHash: hashNewPassword },
          { new: true }
        );
        return res.json({ success: true });
      }
      throw new Error('wrong details');
    } else {
      throw new Error('wrong details');
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log('login-user-err', err);
    return res.json({
      error: true,
      errorMessage: err.message,
    });
  }
});

export default passwordChangeHandler;
