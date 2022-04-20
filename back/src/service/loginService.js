import { UserModel } from "../db";

import { hashPassword } from "../utils/hashPassword";
import { makeToken } from "../utils/makeToken";

class LoginService {
  static findUser = async ({ email, password }) => {
    const discoveredUser = await UserModel.findByEmail(email);
    const hashedPassword = hashPassword(password);

    const userId = String(discoveredUser._id);

    if (!discoveredUser) {
      const errorMessage = "해당 이메일로 가입한 내역이 없습니다.";
      return { errorMessage };
    } else if (discoveredUser.password === hashedPassword) {
      const token = makeToken({ userId: userId });
      return {
        discoveredUser,
        token,
      };
    } else {
      const errorMessage = "비밀번호가 틀립니다 다시 한 번 확인해 주세요";
      return { errorMessage };
    }
  };
}

export { LoginService };
