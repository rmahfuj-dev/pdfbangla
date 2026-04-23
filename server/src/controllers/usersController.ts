import { Users } from "../models/Users";
import { asyncHandler } from "../utils/asyncHandler";

// controller for get users
const getUsers = asyncHandler(async (req, res) => {
  const users =await  Users.find({});
  res.status(200).json(users);
});

export { getUsers };
