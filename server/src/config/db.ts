import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pdf");
    console.log("Database is connected")
  } catch(err) {
     console.log(err)
     process.exit(1)
  }
};
