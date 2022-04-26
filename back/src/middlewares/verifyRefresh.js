import jwt from "jsonwebtoken";
import { makeToken } from "../utils/makeToken";
import { verify, refreshVerify } from "../utils/verify";

import dotenv from "dotenv";
dotenv.config();

const verifyRefresh = async (req, res, next) => {
  if (req.headers["authorization"] && req.headers["refresh"]) {
    const token = req.headers["authorization"].split(" ")[1];
    const refreshToken = req.headers["refresh"];

    // access token 검증 -> expired여야 함.
    const authResult = verify(token);

    // access token 디코딩하여 userId를 가져온다.
    const decoded = jwt.decode(token);

    // 디코딩 결과가 없으면 권한이 없음을 응답.
    if (!decoded) {
      res.status(401).send({
        ok: false,
        message: "No authorized!",
      });
    }

    /* access token의 decoding 된 값에서
        유저의 id를 가져와 refresh token을 검증합니다. */
    const refreshResult = await refreshVerify(refreshToken, decoded.userId);

    // 재발급을 위해서는 access token이 만료되어 있어야합니다.
    if (authResult.ok === false && authResult.message === "jwt expired") {
      // 1. access token이 만료되고, refresh token도 만료 된 경우 => 새로 로그인해야합니다.
      if (refreshResult === false) {
        res.status(401).send({
          ok: false,
          message: "No authorized! 다시 로그인해주세요.",
        });
      } else {
        // 2. access token이 만료되고, refresh token은 만료되지 않은 경우 => 새로운 access token을 발급
        const newAccessToken = makeToken({ userId: decoded.userId });

        res.status(200).send({
          // 새로 발급한 access token과 원래 있던 refresh token 모두 클라이언트에게 반환합니다.
          ok: true,
          data: {
            accessToken: newAccessToken,
            refreshToken,
          },
        });
      }
    } else {
      // 3. access token이 만료되지 않은경우 => refresh 할 필요가 없습니다.
      res.status(400).send({
        ok: false,
        message: "Acess token is not expired!",
      });
    }
  } else {
    // access token 또는 refresh token이 헤더에 없는 경우
    res.status(400).send({
      ok: false,
      message: "Access token and refresh token are need for refresh!",
    });
  }
};

export { verifyRefresh };
