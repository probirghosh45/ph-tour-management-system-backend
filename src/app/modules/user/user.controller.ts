/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.service";
// const createUser = async (req: Request, res: Response) => {
//   try {
//     // const {name,email} = req.body
//     // const user = await User.create({
//     //     name,email
//     // })
//     const user = await UserServices.createUser(req.body);
//     res.status(httpStatus.CREATED).json({
//       message: "User created successfully",
//       user,
//     });
//   } catch (err: any) {
//     // eslint-disable-next-line no-console
//     console.log(err);
//     res.status(httpStatus.BAD_REQUEST).json({
//       message: `Something went wrong ${err.message}`,
//       err,
//     });
//   }
// };

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "user created successfully",
      data: user,
    });
  }
);

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserServices.getAllUsers();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All users retrieved Successfully",
      data: result.data,
      meta: result.meta,
    });
  }
);

export const UserController = {
  createUser,
  getAllUsers,
};
