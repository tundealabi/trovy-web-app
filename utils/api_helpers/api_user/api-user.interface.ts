interface IuserLoginHelper {
  email: string;
  password: string;
}
interface IuserSignupHelper {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

interface IUserAuthTokenHelper {
  userId: string;
  userToken: string;
}

export type { IuserLoginHelper, IuserSignupHelper, IUserAuthTokenHelper };
