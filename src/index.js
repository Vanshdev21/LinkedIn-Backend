import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRouter from "./routers/auth.router.js";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

async function server() {
  await connectDB();
  console.log("DB connected");
  app.listen(PORT, () => {
    console.log(`Server is started at port: ${PORT}`);
  });
}

server();
