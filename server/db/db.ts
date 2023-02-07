import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();
const mongoConnect = async () => {
  const dbUri = process.env.MONGO_DB_URI as string;
  try {
    await mongoose.connect(dbUri as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to mongodb');
  } catch (error) {
    console.log(error);
  }
};

export default mongoConnect;
