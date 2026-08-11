import mongoose from "mongoose";
import chalk from "chalk";

export async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined");
    }

    await mongoose.connect(uri);
    if (mongoose.connection.readyState === 1) {
      console.log(chalk.greenBright("Connected to MongoDB"));
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
