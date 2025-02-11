class FilmeList {
    constructor() {
        this.filmes = [];
    }
    addFilme(filme) {
        this.filmes.push(filme);
    }
    getAllFilmes() {
        return this.filmes;
    }
    getFilmeById(id) {
        const filme = this.filmes.find((filme) => filme.id == id);
        if(!filme) {
            throw new Error("Filme não encontrada!");
        }
        return filme;
    }
    updateFilme(id, updateData) {
        const filme = this.getfilmeById(id);
        Object.assign(filme, updateData);
        return filme;
    }
    deleteFilme(id) {
        this.filmes = this.filmes.filter((filme) => filme.id != id);
    }
    getTotalFilmes() {
        return this.filmes.length;
    }
    getTop10Filmes() {
        return this.filmes.sort((a, b) => b.plays - a.plays).slice(0, 10);
    }
}

module.exports = FilmeList;