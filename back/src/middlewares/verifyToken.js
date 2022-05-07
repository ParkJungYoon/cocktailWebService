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

      let route = req.route.path;
      if (route.split("/")[1] == "board") {
        req.boardId = req.params?.id;
      }

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

const verify = async (req, res, next) => {
  try {
    if (req.headers["authorization"]) {
      const JWT_KEY = process.env.JWT_KEY;
      const token = req.headers["authorization"].split(" ")[1];
      const decoded = jwt.verify(token, JWT_KEY);
      req.user = decoded.userId;
    } else {
      req.user = null;
    }
    next();
  } catch (error) {
    next();
  }
};

export { verifyToken, verify };
