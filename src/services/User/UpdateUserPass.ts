import prismaClient from "../../prisma";
import { mailBody } from "../../utils/mailBody";
import mailConfig from "../Email/mailer";
import { sign } from "jsonwebtoken"

interface UpdatePassRequest {
    email: string;
}
// criando token com jwt
function generateResetToken(): string {
    // const token = sign({ code: generateCode() }, process.env.JWT_SECRET!, { expiresIn: '20m' });
    const token = generateCode()
    return token;
}
// criando token de 4 dígitos
function generateCode(): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
    return code;
}

//Para vc se familiarizar, Bigas!!!!!
class UpdatePassService {
    async execute({ email }: UpdatePassRequest) {
        // verificando se o email está cadastrado
        const user = await prismaClient.user.findFirst({
            where: {
                email,
            },
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        // Gerar um token de redefinição de senha
        const resetToken = generateResetToken();

        // atualizar o registro do usuário com o token:
        await prismaClient.user.update({
            where: {
                id: user.id
            },
            data: {
                reset_token: resetToken,
            },
        });

        console.log("tentando pegar o token ==> ", resetToken);
        // enviando email para recuperação de senha:
        const mailOptions = {
            from: mailConfig.address,
            to: email,
            subject: "Redefinição de senha",
            html: mailBody(user.name, resetToken),
        };

        try {
            await mailConfig.transport.sendMail(mailOptions);
            console.log("Email enviado com sucesso");
        } catch (error) {
            console.error("Erro ao enviar o email:", error);
            throw new Error("Erro ao enviar o email de recuperação de senha");
        }
    }
}


export { UpdatePassService };
