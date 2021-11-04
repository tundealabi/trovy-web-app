import { Schema, model, Model } from 'mongoose';
import IUserAuthTokenModel from './user-auth-token.interface';

const userAuthTokenSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userTokenSecret: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// eslint-disable-next-line import/no-mutable-exports
let UserAuthToken: Model<IUserAuthTokenModel>;

try {
  UserAuthToken = model('userAuthToken');
} catch (error) {
  UserAuthToken = model('userAuthToken', userAuthTokenSchema, 'usersAuthTokens');
}

export default UserAuthToken;
