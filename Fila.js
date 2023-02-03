const No = require("./No");

class Fila {
    constructor() {
        this.inicio = null;
        this.fim = null;
        this.quantidadeNos = 0;
    }

    /**
     * Insere um livro no final da fila
     */
    enfileirar(livro) {
        const no = new No(livro);
        if (this.inicio === null) {
            this.inicio = no;
        } else {
            this.fim.no = no;
        }
        this.fim = no;
        this.quantidadeNos++;
    }

    /**
     * Retira um livro do início da fila
     */    
    desenfileirar() {
        if (this.inicio != null) {
            const inicioAtual = this.inicio;
            this.inicio = inicioAtual.no;
            if (this.inicio === null) {
                this.fim = null;
            }
            this.quantidadeNos--;
            return inicioAtual.livro;
        }
        return null;
    }

    /**
     * Retorna a quantidade de livros na fila
     */
    tamanhoDaFila() {
        return this.quantidadeNos;
    }

    /**
     * Imprime os livros na fila
     */
    imprimirFila() {
        let atual = this.inicio;
        while (atual != null) {
            atual.livro.imprimir();
            atual = atual.no;
        }
    }

}

module.exports = Fila;
