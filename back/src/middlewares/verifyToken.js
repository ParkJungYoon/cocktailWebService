import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers["authorization"]) {
      res.status(401).json({
        status: "fail",
        message: "token이 없습니다",
      });
    } else {
      const JWT_KEY = process.env.JWT_KEY;
      const token = req.headers["authorization"].split(" ")[1];
      const decoded = jwt.verify(token, JWT_KEY);
      req.user = decoded.userId;
      next();
    }
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "token이 변형되었습니다. ",
      error,
    });
    next(error);
  }
};

export { verifyToken };
