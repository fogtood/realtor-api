import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";

import connectToDatabase from "./database/mongodb.js";

import authRouter from "./routes/auth.routes.js";

import errorMiddleware from "./middleware/error.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(passport.initialize());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Yariga Realtor API!</h1>");
});

app.use("/api/v1/auth", authRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server running on port ${PORT}`);
});
