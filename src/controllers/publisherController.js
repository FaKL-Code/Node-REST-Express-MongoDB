import { publisher } from "../models/Publisher.js";

class PublisherController {

    static async listarPublishers(req, res) {
        try{
            const listaPublishers = await publisher.find({});
            res.status(200).json(listaPublishers);
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requisicao` });
        }
    }

    static async cadastrarPublishers(req, res) {
        try {
            const novoPublisher = await publisher.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", publisher: novoPublisher });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha ao cadastrar publisher` });
        }
    }

    static async buscaPublisher(req, res) {
        try {
            const publisherEncontrado = await publisher.findById(req.params.id);
            res.status(200).json(publisherEncontrado);
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requisicao` });
        }
    }

    static async atualizaPublisher(req, res) {
        try {
            await publisher.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: "publisher atualizado"});
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na atualizacao` });
        }
    }

    static async deletePublisher(req, res) {
        try {
            await publisher.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "livro excluido com sucesso" });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha ao deletar publisher`})
        }
    }
};

export default PublisherController;