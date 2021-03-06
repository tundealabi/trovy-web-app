import axios from 'axios';
import {
  IUserAuthTokenHelper,
  IuserLoginHelper,
  IuserPasswordChangeHelper,
  IuserSignupHelper,
} from './api-user.interface';

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

const userVerifyAuthTokenHelper = async (userData: IUserAuthTokenHelper) => {
  const response = await axios({
    method: 'post',
    url: '/api/user/token-verification',
    data: {
      userId: userData.userId,
      userToken: userData.userToken,
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
    url: `${process.env.NEXTAUTH_URL}/api/user/session`,
    data: {
      email: userEmail,
    },
  });
  // console.log('resp-login', response);
  return response.data;
};

const userPasswordChangeHelper = async (passwordData: IuserPasswordChangeHelper) => {
  const response = await axios({
    method: 'post',
    url: `/api/user/password-change`,
    data: {
      ...passwordData,
    },
  });
  // console.log('resp-login', response);
  if (response.data.error) {
    throw new Error(response.data.errorMessage);
  }
  return response.data;
};

export {
  userLoginHelper,
  userVerifyAuthTokenHelper,
  userSignupHelper,
  userSessionHelper,
  userPasswordChangeHelper,
};
