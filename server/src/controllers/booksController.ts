import { Book } from "../models/BookLists";
import { asyncHandler } from "../utils/asyncHandler";

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});
  res.status(200).json(books);
});
export { getBooks };
