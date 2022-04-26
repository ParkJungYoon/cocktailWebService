import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_KEY = process.env.JWT_KEY;

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

const refreshVerify = async (token, userId) => {
  // refresh token 확인
  try {
    // db에서 refresh token 가져오기
    const refresh_token = await Token.findToken(userId);
    if (token === refresh_token) {
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
