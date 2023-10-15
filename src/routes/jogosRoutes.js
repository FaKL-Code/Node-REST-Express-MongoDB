import express from "express";
import JogoController from "../controllers/jogoController.js";

const jogos = express.Router();

jogos.get("/jogos", JogoController.listarJogos);
jogos.get("/jogos/:id", JogoController.buscaJogo);
jogos.post("/jogos", JogoController.cadastrarJogos);
jogos.put("/jogos/:id", JogoController.atualizaJogo);
jogos.delete("/jogos/:id", JogoController.deleteJogo);

export default jogos;