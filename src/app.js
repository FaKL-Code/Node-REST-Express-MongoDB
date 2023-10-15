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

function buscaJogo(id) {
    return jogos.findIndex(jogo => {
        return jogo.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("teste Node.js express");
});

app.get("/jogos", (req, res) => {
    res.status(200).json(jogos);
});

app.get("/jogos/:id", (req, res) => {
    const index = buscaJogo(req.params.id);
    res.status(200).json(jogos[index]);
});

app.post("/jogos", (req, res) => {
    jogos.push(req.body);
    res.status(201).send("Jogo cadastrado com sucesso!");
});


export default app;