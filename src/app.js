import express from "express";
import conecta from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conn = await conecta();

conn.on("error", (erro) => {
    console.error("deu merda", erro);
});

conn.once("open", () => {
    console.log("deu bom");    
});

const app = express();
routes(app);

app.get("/jogos/:id", (req, res) => {
    const index = buscaJogo(req.params.id);
    res.status(200).json(jogos[index]);
});

app.post("/jogos", (req, res) => {
    jogos.push(req.body);

});

app.put("/jogos/:id", (req, res) => {
    const index = buscaJogo(req.params.id);
    jogos[index].titulo = req.body.titulo;
    res.status(200).json(jogos);
});

app.delete("/jogos/:id", (req, res) => {
    const index = buscaJogo(req.params.id);
    jogos.splice(index, 1);
    res.status(200).send("Jogo removido com sucesso!");
});

export default app;
