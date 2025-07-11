import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { authJwt } from "../middlewares/authJWT";

const routes = Router()

routes.get('/',authJwt, UsuarioController.getAll)
routes.get('/:id', UsuarioController.getOn)
routes.put('/:id', UsuarioController.update)
routes.delete('/:id', UsuarioController.delete)
routes.post('/id', UsuarioController.create)

export default routes;