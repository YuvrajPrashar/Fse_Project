import mongoose from "mongoose";
import "dotenv/config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MongoDB_URI}`);
    console.log("MonogDB connected!!");
  } catch (error) {
    console.log(`Error found Error:${error}`);
  }
};

export { connectDB };
