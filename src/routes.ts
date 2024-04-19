import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { LoginUserController } from "./controllers/User/LoginUserController";


const router = Router()

router.post("/register", new CreateUserController().handle)
router.post("/session", new LoginUserController().handle)

export { router }