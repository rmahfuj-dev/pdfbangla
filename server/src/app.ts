import express, { Request, Response } from "express";
import cors from "cors";
import usersRouter from "./routes/users";
import booksRouter from "./routes/books";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.0.147:5173"],
    credentials: true,
  }),
);
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("server is running");
});

app.use("/users", usersRouter);
app.use("/books", booksRouter);

export default app;
