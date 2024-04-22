import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { LoginUserController } from "./controllers/User/LoginUserController";
import { UpdatePassController } from "./controllers/User/UpdatePassController";
import { AuthAuthenticated } from "./middlewares/AuthMiddleware";
import { DatailUserController } from "./controllers/User/DatailsUserController";


const router = Router()

router.post("/register", new CreateUserController().handle)
router.post("/session", new LoginUserController().handle)
router.put("/updatepass", new UpdatePassController().handle)
router.get("/userdatails", AuthAuthenticated, new DatailUserController().handle)


export { router }