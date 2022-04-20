import { UserModel } from "../db";

class registerService {
  static addUser = async ({ email, password, name }) => {
    const newUserData = { email, password, name };
    const newUser = await UserModel.addUser(newUserData);
    return newUser;
  };
}

export { registerService };
