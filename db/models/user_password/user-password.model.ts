import { Schema, model, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import IUserPasswordModel from './user-password.interface';

const userPasswordSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userPwdHash: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userPasswordSchema.methods.compareUserPwd = async function compareUserPwd(pwdToCompare: string) {
  const pwdIsAMatch = await bcrypt.compare(pwdToCompare, this.userPwdHash as string);
  // const pwdIsAMatch = pwdToCompare === this.userPwdHash as string;
  return pwdIsAMatch;
};
userPasswordSchema.methods.hashUserPwd = async function hashUserPwd() {
  this.userPwdHash = await bcrypt.hash(this.userPwdHash, 10);
  return true;
};

// eslint-disable-next-line import/no-mutable-exports
let UserPassword: Model<IUserPasswordModel>;

try {
  UserPassword = model('userPassword');
} catch (error) {
  UserPassword = model('userPassword', userPasswordSchema, 'usersPasswords');
}

export default UserPassword;
