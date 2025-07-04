import { Router } from "express";
import { ProdutoController } from "../Controllers/ProdutoController";

const routes = Router()

routes.get('/',ProdutoController.listar)

export default routes