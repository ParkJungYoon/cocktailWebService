import { UserModel } from "../db";

import { hashPassword } from "../utils/hashPassword";

class registerService {
  static addUser = async ({ email, password, name }) => {
    const hashedPassword = hashPassword(password);
    const newUserData = { email, password: hashedPassword, name };
    const newUser = await UserModel.addUser(newUserData);
    return newUser;
  };
}

export { registerService };
