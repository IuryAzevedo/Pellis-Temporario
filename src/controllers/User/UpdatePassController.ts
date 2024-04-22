import { Request, Response } from "express";
import { UpdatePassService } from "../../services/User/UpdateUserPass";

class UpdatePassController {
    async handle(req: Request, res: Response) {
        const { email } = req.body;

        const updatePassService = new UpdatePassService();
        try {
            await updatePassService.execute({ email });
            res.status(200).json({ message: "Email de recuperação de senha enviado com sucesso" });
        } catch (error) {
            console.error("Erro ao tentar recuperar senha:", error);
            res.status(500).json({ error: "Erro ao tentar recuperar senha. Por favor, tente novamente mais tarde." });
        }
    }
}

export { UpdatePassController };
