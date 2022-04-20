import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_KEY = process.env.JWT_KEY;
const makeToken = Object => {
  const token = jwt.sign(Object, JWT_KEY, { expiresIn: "24h" });
  return token;
};

export { makeToken };
