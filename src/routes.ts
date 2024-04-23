import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { LoginUserController } from "./controllers/User/LoginUserController";
import { UpdatePassController } from "./controllers/User/UpdatePassController";
import { AuthAuthenticated } from "./middlewares/AuthMiddleware";
import { DatailUserController } from "./controllers/User/DatailsUserController";
import { UpdateUserController } from "./controllers/User/UpdateUserController";


const router = Router()

router.post("/register", new CreateUserController().handle);
router.post("/session", new LoginUserController().handle);
router.get("/userdatails", AuthAuthenticated, new DatailUserController().handle);
router.put("/updatepass", new UpdatePassController().handle);
router.put("/updateprofile", AuthAuthenticated, new UpdateUserController().handle);

export { router }