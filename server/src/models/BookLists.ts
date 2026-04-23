import mongoose, { Schema } from "mongoose";

export interface ILangText {
  en: string;
  bn: string;
}
export interface IwriterText {
  en: string;
  bn: string;
}
export interface IBooks {
  name: ILangText;
  writer: IwriterText;
}
const langSchema = new Schema(
  {
    en: { type: String, required: true, trim: true },
    bn: { type: String, required: true, trim: true },
  },
  { _id: false },
);
const booksSchema = new Schema<IBooks>({
  name: langSchema,
  writer: langSchema,
});
export const Book = mongoose.model<IBooks>("Book", booksSchema, "booklist");
