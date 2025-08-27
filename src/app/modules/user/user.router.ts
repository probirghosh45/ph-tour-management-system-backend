import { Router } from "express";
import { UserController } from "./user.controller";


const router = Router()
router.post("/register",UserController.createUser)
export const UserRoutes = router


// http://localhost:5000/api/v1/user/register