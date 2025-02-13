const Filme = require("../models/Filme.js");
const FilmeList = require("../models/FilmeList.js");

const lista = new FilmeList();

const Filme1 = new Filme("Diario de uma Paixão", "Romance", 14, 65);
lista.addFilme(Filme1);

lista.addFilme(new Filme("O rei do show", "Musical", 12, 23));

const router = {
    addFilme: (req, res) => {
        try {
            const { title, genre, classification, plays } = req.body;
            if (!title || !genre || !classification) {
                throw new Error("Preencha todos os campos!");
            }
            const filme = new Filme(title, genre, classification, plays);
            lista.addFilme(filme);
            res.status(200).json({ message: "Criado com sucesso!", filme });
        } catch (error) {
            res.status(400).json({ message: "Erro ao criar filme!", error: error.message });
        }
    },

    getAllFilmes: (req, res) => {
        try {
            const filmes = lista.getAllFilmes();
            res.status(200).json(filmes);
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar filme!", error: error.message });
        }
    },

    getFilmeById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getFilmeById(id));
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar filme por id", error: error.message });
        }
    },

    updateFilme: (req, res) => {
        try {
            res.status(200).json(lista.updateFilme(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar", error: error.message });
        }
    },

    deleteFilme: (req, res) => {
        try {
            const id = req.params.id;
            lista.deleteFilme(id);
            res.status(200).json({ message: "Filme deletado com sucesso!", id });
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar filme", error: error.message });
        }
    },

    getTop10Filmes: (req, res) => {
        try {
            const filmes = lista.getTop10Filmes();
            res.status(200).json(filmes);
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar Top10", error: error.message });
        }
    },
};

module.exports = router;