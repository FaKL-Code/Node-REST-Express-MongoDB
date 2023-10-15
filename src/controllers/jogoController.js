import jogo from "../models/Jogo.js";

class JogoController {

    static async listarJogos(req, res) {
        const listaJogos = await jogo.find({});
        res.status(200).json(listaJogos);
    }

    static async cadastrarJogos(req, res) {
        try {
            const novoJogo = await jogo.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", jogo: novoJogo });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha ao cadastrar livro`})
        }
    }

};

export default JogoController;