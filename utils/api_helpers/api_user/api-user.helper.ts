import axios from 'axios';
import { IuserLoginHelper, IuserSignupHelper } from './api-user.interface';

const appUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://https://trovy-loan.vercel.app/'
    : 'http://localhost:3000';

const userLoginHelper = async ({ email, password }: IuserLoginHelper) => {
  const response = await axios({
    method: 'post',
    url: '/api/user/login',
    data: {
      email,
      password,
    },
  });
  // console.log('resp-login', response);
  if (response.data.error) {
    throw new Error(response.data.errorMessage);
  }
  return response.data;
};
const userSignupHelper = async (userData: IuserSignupHelper) => {
  const response = await axios({
    method: 'post',
    url: '/api/user/signup',
    data: {
      ...userData,
    },
  });
  // console.log('resp-login', response);
  if (response.data.error) {
    throw new Error(response.data.errorMessage);
  }
  return response.data;
};
const userSessionHelper = async (userEmail: string) => {
  const response = await axios({
    method: 'post',
    url: `${appUrl}/api/user/session`,
    data: {
      email: userEmail,
    },
  });
  // console.log('resp-login', response);
  return response.data;
};

export { userLoginHelper, userSignupHelper, userSessionHelper };