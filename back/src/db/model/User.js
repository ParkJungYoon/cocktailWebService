import { User } from "../Schema/user";

class UserModel {
  static modify = async ({ filter, updateData }) => {
    const option = { returnOriginal: false };
    const updatedUser = await User.findOneAndUpdate(filter, updateData, option);
    console.log(updatedUser);
    return updatedUser;
  };
  static findByEmail = async email => {
    const user = User.findOne({ email });
    return user;
  };
  static addUser = async newUserData => {
    const newUser = await User.create(newUserData);
    return newUser;
  };
}

export { UserModel };
