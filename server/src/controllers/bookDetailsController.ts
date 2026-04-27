import { Book } from "../models/BookLists";
import { asyncHandler } from "../utils/asyncHandler";

const getBookData = asyncHandler(async (req, res) => {
    const bookDetails = Book.findById
});
