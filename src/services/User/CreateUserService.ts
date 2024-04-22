
import prismaClient from "../../prisma"
import bcrypt from "bcryptjs"
// import { Express } from "express";

interface UserRequest {
    name: string,
    email: string,
    password: string,
    CRM: string,
    CPF: string
}

class CreateUserService {
    async execute({ name, email, password, CRM, CPF }: UserRequest) {
        if (!email) {
            throw new Error('Email incorreto, tente novamente');
        } else if (!CRM) {
            throw new Error("CRM incorreto, tente novamente");
        } else if (!CPF) {
            throw new Error("CPF incorreto, tente novamente");
        }
        const userExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        const crmExists = await prismaClient.user.findFirst({
            where: {
                CRM: CRM
            }
        })
        const cpfExists = await prismaClient.user.findFirst({
            where: {
                CPF: CPF
            }
        })

        if (userExists) {
            throw new Error('Esse email já existe!');
        }

        if (crmExists) {
            throw new Error("CRM já cadastrado, tente outro!");
        }
        if (cpfExists) {
            throw new Error("CPF já cadastrado, tente outro!")
        }

        const passwordHash = await bcrypt.hash(password, 8)
        const userData = {
            name,
            email,
            password: passwordHash,
            CRM,
            CPF
        }
        const user = await prismaClient.user.create({
            data: userData
        })

        return user;
    }

}

export { CreateUserService }