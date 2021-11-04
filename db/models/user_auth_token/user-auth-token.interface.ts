import { Document, PopulatedDoc } from 'mongoose';

interface IUserAuthTokenModel {
  userId: PopulatedDoc<Document>;
  userTokenSecret: string;
}

export default IUserAuthTokenModel;
