
import { Request, Response } from "express"
import { UserDatails } from "../../services/User/UserDatails";

class DatailUserController {
    async handle(req: Request, res: Response){
        const user_id = req.user_id
        const datailUserService = new UserDatails()

        try {
            const user= await datailUserService.execute(user_id) 
            return res.status(200).json(user)
        } catch (error) {
            throw new Error("Erro ao pegar detalhes de usuário!")
        }
    }
}

export { DatailUserController }