import dotenv from "dotenv";
dotenv.config()

export default {
  MONGO_DATABASE:process.env.MONGO_DATABASE || "videodb",
  MONGO_USER:process.env.MONGO_USER || "admin",
  MONGO_PASWORD:process.env.MONGO_PASWORD || "admin",
  MONGO_HOST:process.env.MONGO_HOST || "localhost",
  PORT: process.env.PORT || 3000
};
