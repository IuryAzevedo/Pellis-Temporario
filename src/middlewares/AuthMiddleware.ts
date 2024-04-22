import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface Payload {
    sub: string
}


export function AuthAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(400).end()
    }

    const [, token] = authToken.split(" ")
    try {
        //validando o token 
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET não encontrado!");
        }

        const { sub } = verify(token, process.env.JWT_SECRET) as Payload

        req.user_id = sub


        return next()
    }

    catch (err) {
        console.error("Erro de autenticação!");
        return res.status(401).end()
    }
}