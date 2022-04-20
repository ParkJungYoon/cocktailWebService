import { UserModel } from "../db";

import { hashPassword } from "../utils/hashPassword";

class registerService {
  static addUser = async ({ email, password, name }) => {
    const user = await UserModel.findByEmail(email);
    if (user) {
      const errorMessage = "중복된 이메일입니다. 다른 이메일을 입력해주세요";
      return { errorMessage };
    }
    const hashedPassword = hashPassword(password);
    const newUserData = { email, password: hashedPassword, name };
    const newUser = await UserModel.addUser(newUserData);
    return newUser;
  };
}

export { registerService };
