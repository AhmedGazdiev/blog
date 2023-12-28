import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { postRouter } from "./routes/postRoute.js";
import { userRouter } from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use("/api", postRouter);
app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB OK"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("server start on PORT " + PORT);
});
