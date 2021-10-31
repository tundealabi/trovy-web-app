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

export type { IuserLoginHelper, IuserSignupHelper };
