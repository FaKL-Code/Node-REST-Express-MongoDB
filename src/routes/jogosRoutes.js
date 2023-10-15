import express from "express";
import JogoController from "../controllers/jogoController.js";

const routes = express.Router();

routes.get("/jogos", JogoController.listarJogos);

export default routes;