import AppError from "../../errorHelpers/AppError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import httpStatus from "http-status-codes"
import bcryptJs from "bcryptjs"
import { generatedToken } from "../../utils/jwt";
import { envVars } from "../../config/env";


const credentialsLogin = async(payload : Partial<IUser>) =>{

    const {email,password} = payload;

    const isUserExist = await User.findOne({email})

    if (!isUserExist) {
        throw new AppError(httpStatus.BAD_REQUEST,"User not found")
    }

    const passwordMatched = await bcryptJs.compare(
        password as string,
        payload.password as string
    )

    if (!passwordMatched) {
        throw new AppError(httpStatus.BAD_REQUEST,"password not matched")
    }

   const jwtPayload  = {
    userId : isUserExist._id,
    email : isUserExist.email,
    role : isUserExist.role
   }

   const accessToken = generatedToken(jwtPayload,envVars.JWT_ACCESS_SECRET,envVars.JWT_ACCESS_EXPIRES)

   return {
    accessToken
   }
 
}

export const AuthService = {
  credentialsLogin
}

