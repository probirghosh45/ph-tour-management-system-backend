/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { User } from "./user.model";
import httpStatus from "http-status-codes";
  
const createUser = async (req : Request , res : Response) => {
    try {

        // const {name,email} = req.body
        // const user = await User.create({
        //     name,email
        // })

    const { name, email, password, phone, picture, address, role } = req.body;

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
        auths: []
    });
        res.status(httpStatus.CREATED).json({
            message : "User created successfully",
            user
        })
    } catch (err : any) {
        // eslint-disable-next-line no-console
        console.log(err)
        res.status(httpStatus.BAD_REQUEST).json({
            message : `Something went wrong ${err.message}`,
            err
        })
    }
}

export const UserController = {
    createUser
}



