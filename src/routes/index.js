import express from "express";
import jogos from "./jogosRoutes.js";
import publishers from "./publishersRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("teste Node.js com Express"));

    app.use(express.json(), jogos);
    app.use(express.json(), publishers);
};

export default routes;