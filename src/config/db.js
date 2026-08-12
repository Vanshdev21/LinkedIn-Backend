import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
