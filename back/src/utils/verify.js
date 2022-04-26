import jwt from "jsonwebtoken";
import { TokenModel } from "../db";
import dotenv from "dotenv";
dotenv.config();

const JWT_KEY = process.env.JWT_KEY;

// access token 유효성 검사
const verify = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_KEY);
    return {
      ok: true,
      userId: decoded.userId,
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};

// refresh token 유효성 검사
const refreshVerify = async (token, userId) => {
  try {
    // db에서 refresh token 가져오기
    const { refreshToken } = await TokenModel.findToken(userId);
    if (token === refreshToken) {
      try {
        jwt.verify(token, JWT_KEY);
        return true;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export { verify, refreshVerify };
