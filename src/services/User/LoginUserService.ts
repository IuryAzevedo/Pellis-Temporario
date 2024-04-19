import bcryptjs from "bcryptjs"
import { sign } from "jsonwebtoken"
import prismaClient from "../../prisma"

interface LoginRequest {
    email: string
    password: string
}

class LoginUserService {
    async execute({ email, password }: LoginRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new Error("Usuário ou senha incorretos");
        }
        const passwordMatch = await bcryptjs.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('senha incorreta, tente novamente')
        }
        if (!process.env.JWT_SECRET) {
            throw new Error('Chave JWT não definida');
        }
        const token = sign({
            nome: user.name,
            email: user.email
        },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            nome: user.name,
            email: user.email,
            token: token
        }

    }
}

export { LoginUserService }