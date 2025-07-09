import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const routes = Router()

routes.get('/', UsuarioController.getAll)
routes.get('/:id', UsuarioController.getOn)
routes.put('/:id', UsuarioController.update)
routes.delete('/:id', UsuarioController.delete)
routes.post('/', UsuarioController.create)

export default routes;