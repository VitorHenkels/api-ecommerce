import { json, NextFunction,Request,Response } from "express";
const jwt = require('jsonwebtoken')

interface jwtPayLoad{
    sub: string,
    email:string,
    nome?: string,
    role?:string,
    [key:string]: any
}

//adiciona o tipo para o express request
declare module 'express-serve-static-core'{
    interface Request{
        user?: jwtPayLoad
    }
}
export async function authJwt(req: Request, resp: Response, next:NextFunction):Promise<void> {
    const authHeader =  req.headers.authorization
    if (!authHeader||!authHeader.startsWith("Baerer")) {
        resp.status(401).json({erro: "Token inválido ou inexistente"})
        return
    }
    const token = authHeader?.split("")[1]

    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET) as jwtPayLoad
    } catch (erro) {
        resp.status(401).json({erro: "token inválido"})
    }
}