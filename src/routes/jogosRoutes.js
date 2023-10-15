import express from "express";
import JogoController from "../controllers/jogoController.js";

const routes = express.Router();

routes.get("/jogos", JogoController.listarJogos);
routes.get("/jogos/:id", JogoController.buscaJogo);
routes.post("/jogos", JogoController.cadastrarJogos);
routes.put("/jogos/:id", JogoController.atualizaJogo);
routes.delete("/jogos/:id", JogoController.deleteJogo);

export default routes;