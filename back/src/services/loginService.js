import { UserModel } from "../db";

import { hashPassword } from "../utils/hashPassword";
import { makeToken } from "../utils/makeToken";

class LoginService {
  static delete = async ({ userId }) => {
    const deletedUser = await UserModel.delete({ userId });
    if (!deletedUser) {
      const errorMessage =
        "해당 이메일로 가입된 내역이 없습니다. 다시 한 번 확인해주세요";
      return { errorMessage };
    }
    return deletedUser;
  };
  static modify = async ({ userId, email, password, name }) => {
    const user = await UserModel.findByEmail(email);
    if (user) {
      const errorMessage = "중복된 이메일 입니다. 다른 이메일을 입력해주세요";
      return { errorMessage };
    }

    const hashedPassword = hashPassword(password);
    const filter = { userId };
    const updateData = {
      email,
      password: hashedPassword,
      name,
    };
    const updatedUser = await UserModel.modify({ filter, updateData });
    return updatedUser;
  };

  static findUser = async ({ email, password }) => {
    const discoveredUser = await UserModel.findByEmail({ email });
    const hashedPassword = hashPassword(password);
    console.log(discoveredUser);
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
