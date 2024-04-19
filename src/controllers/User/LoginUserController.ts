import { Request, Response } from "express"
import { LoginUserService } from "../../services/User/LoginUserService";

class LoginUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        const loginUserService = new LoginUserService();
        try {
            const userData = {
                email,
                password,
            }
            const login = await loginUserService.execute(userData)
            return res.status(200).json(login)
        } catch (error) {
            res.status(400).json("Erro ao realizar login")
        }
    }
}


export { LoginUserController }