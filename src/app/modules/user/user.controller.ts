/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    // const {name,email} = req.body
    // const user = await User.create({
    //     name,email
    // })
    const user = await UserServices.createUser(req.body);
    res.status(httpStatus.CREATED).json({
      message: "User created successfully",
      user,
    });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(httpStatus.BAD_REQUEST).json({
      message: `Something went wrong ${err.message}`,
      err,
    });
  }
};

export const UserController = {
  createUser,
};
