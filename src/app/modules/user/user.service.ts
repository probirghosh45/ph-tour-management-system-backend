import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { name, email, password, phone, picture, address, role } = payload;

  const user = await User.create({
    name,
    email,
    password,
    phone,
    picture,
    address,
    role,
    isDeleted: false,
    isActive: "ACTIVE",
    isVerified: false,
    auths: [],
  });
  return user;
};

export const UserServices ={
    createUser
}
