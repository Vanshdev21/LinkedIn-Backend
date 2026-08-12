import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cookieParser());

async function server() {
  await connectDB();
  console.log("DB connected");
  app.listen(PORT, () => {
    console.log(`Server is started at port: ${PORT}`);
  });
}

server();
