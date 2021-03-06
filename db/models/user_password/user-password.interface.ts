import { Document, PopulatedDoc } from 'mongoose';

interface IUserPasswordModel {
  userId: PopulatedDoc<Document>;
  userPwdHash: string;
  // eslint-disable-next-line no-unused-vars
  compareUserPwd: (pwdToCompare: string) => Promise<boolean>;
  hashUserPwd: () => Promise<boolean>;
}

export default IUserPasswordModel;
