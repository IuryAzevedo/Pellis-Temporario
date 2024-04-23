import { Request, Response } from "express"
import { UpdateUserService } from "../../services/User/UpdateUserService"


class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;
        const updateProfile = new UpdateUserService()

        try {
            const update = updateProfile.execute({
                name, email
            })
            console.log("tentando alterar usuário ==> ", update);
            return res.status(200).json(update)
        }
        catch (error) {
            console.log("não foi possível alterar detalhes do usuário! ", error);
            return res.status(400).json({ error: 'NÃO FOI POSSÍVEL ALTERAR DETALHES DE USUÁRIO!' })
        }
    }
}


export { UpdateUserController }