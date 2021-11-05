import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../db/db-connect';
import User from '../../../db/models/user/user.model';
import UserPassword from '../../../db/models/user_password/user-password.model';
import { IuserSignupHelper } from '../../../utils/api_helpers/api_user/api-user.interface';

const signupHandler = nc<NextApiRequest, NextApiResponse>();

signupHandler.post(async (req, res) => {
  const errorMessage = 'Email already taken';
  const { firstName, lastName, email, phoneNumber, password }: IuserSignupHelper = req.body;
  try {
    dbConnect();
    const user = await User.findOne({
      email,
    }).select(['_id', 'email']);
    if (user) {
      throw new Error(errorMessage);
    } else {
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber,
      });
      const newUserPassword = await UserPassword.create({
        userId: newUser._id,
        userPwdHash: password,
      });
      await newUserPassword.hashUserPwd();
      await newUserPassword.save();
      return res.send(newUser.email);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log('login-user-err', err);
    return res.json({
      error: true,
      errorMessage: err.message === errorMessage ? errorMessage : 'Something went wrong',
    });
  }
});

export default signupHandler;
