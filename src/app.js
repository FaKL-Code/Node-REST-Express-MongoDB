import express from "express";

const app = express();
app.use(express.json());

const jogos = [
    {
        "id": 1,
        "titulo": "CS2"
    },
    {
        "id": 2,
        "titulo": "Dota 2"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("teste Node.js express");
});

app.get("/jogos", (req, res) => {
    res.status(200).json(jogos);
});

app.post("/jogos", (req, res) => {
    jogos.push(req.body);
    res.status(201).send("Jogo cadastrado com sucesso!");
});

export default app;