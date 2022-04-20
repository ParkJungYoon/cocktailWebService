import { User } from "../schemas/user";

class UserModel {
  static delete = async ({ userId }) => {
    const deleteUser = await User.findByIdAndDelete({ _id: userId });
    return deleteUser;
  };
  static modify = async ({ filter, updateData }) => {
    const option = { returnOriginal: false };
    const updatedUser = await User.findOneAndUpdate(filter, updateData, option);
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
