import express from "express";
import publisherController from "../controllers/publisherController.js";

const publishers = express.Router();

publishers.get("/publishers", publisherController.listarPublishers);
publishers.get("/publishers/:id", publisherController.buscaPublisher);
publishers.post("/publishers", publisherController.cadastrarPublishers);
publishers.put("/publishers/:id", publisherController.atualizaPublisher);
publishers.delete("/publishers/:id", publisherController.deletePublisher);

export default publishers;