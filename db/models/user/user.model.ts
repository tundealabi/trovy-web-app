import { Schema, model, Model } from 'mongoose';
import IUserModel from './user-model.interface';

const userSchema = new Schema(
  {
    firstName: { type: String, lowercase: true, required: true },
    lastName: { type: String, lowercase: true, required: true },
    email: { type: String, lowercase: true, required: true },
    phoneNumber: { type: String, required: true },
    loans: [{ type: Schema.Types.ObjectId, ref: 'loan' }],
  },
  { timestamps: true }
);

// eslint-disable-next-line import/no-mutable-exports
let User: Model<IUserModel>;

try {
  User = model<IUserModel>('user');
} catch (error) {
  User = model<IUserModel>('user', userSchema);
}

export default User;
