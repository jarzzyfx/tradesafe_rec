import  express  from "express";
import { LoginUserController } from "../controllers/LoginUserController.js";
import { registerUserController } from "../controllers/RegisterUserController.js";

const authRouter =  express.Router()

authRouter.post("/register", registerUserController)

authRouter.post("/login", LoginUserController)

export default authRouter