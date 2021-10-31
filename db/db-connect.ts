import mongoose from 'mongoose';

async function dbConnect() {
  if (mongoose.connection.readyState < 1) {
    mongoose.connect(process.env.DATABASE_URI as string);
  }
  // eslint-disable-next-line no-console
  console.log('mongoAtlas is hot');
}

export default dbConnect;
