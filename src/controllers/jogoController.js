import jogo from "../models/Jogo.js";

class JogoController {

    static async listarJogos(req, res) {
        try{
            const listaJogos = await jogo.find({});
            res.status(200).json(listaJogos);
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requisicao` });
        }
    }

    static async cadastrarJogos(req, res) {
        try {
            const novoJogo = await jogo.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", jogo: novoJogo });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha ao cadastrar jogo` });
        }
    }

    static async buscaJogo(req, res) {
        try {
            const jogoEncontrado = await jogo.findById(req.params.id);
            res.status(200).json(jogoEncontrado);
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requisicao` });
        }
    }

    static async atualizaJogo(req, res) {
        try {
            await jogo.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: "jogo atualizado"});
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na atualizacao` });
        }
    }

    static async deleteJogo(req, res) {
        try {
            await jogo.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "livro excluido com sucesso" });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha ao deletar jogo`})
        }
    }
};

export default JogoController;