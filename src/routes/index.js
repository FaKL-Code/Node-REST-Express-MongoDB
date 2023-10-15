import express from "express";
import jogos from "./jogosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("teste Node.js com Express"));

    app.use(express.json(), jogos);
};

export default routes;