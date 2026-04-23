import mongoose, { Schema } from "mongoose";

// interface
export interface IUser {
  name: string;
}

// Scema
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
});

// model
export const Users = mongoose.model<IUser>("Users", userSchema, "users");
