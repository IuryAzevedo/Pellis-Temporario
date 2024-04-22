import express, { Request, Response, response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, CRM, CPF } = req.body;
        const createUserService = new CreateUserService();
        try {
            const userData = {
                name,
                email,
                password,
                CRM,
                CPF
            }
            const user = await createUserService.execute(userData);
            console.log('USUÁRIO CRIADO COM SUCESSO!');
            return res.status(200).json(user);

        } catch (error) {
            res.status(400).json({ error: "Erro ao criar usuário!" })
        }
    }
}

export { CreateUserController }