import { Request, Response } from "express"

export const ProdutoController = {
    
    async listar(req: Request, res: Response){
         res.status(200).json({status: "Sucesso"})
    },

    async criar(req: Request, res: Response){
         res.status(200).json({status: "Sucesso"})
    },

    async buscar(req: Request, res: Response){
         res.status(200).json({status: "Sucesso"})
    },

    async atualizar(req: Request, res: Response){
         res.status(200).json({status: "Sucesso"})
    },
    async deletar(req: Request, res: Response){
         res.status(200).json({status: "Sucesso"})
    },
}