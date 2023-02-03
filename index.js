const Livro = require("./Livro");
const Fila = require("./Fila");

const fila = new Fila();

// teste 01
console.log("== teste 01 ==");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 02
console.log("== teste 02 ==");
fila.enfileirar(new Livro("Casais Inteligentes Enriquecem Juntos", "Gustavo Cerbasi", 192));
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 03
console.log("== teste 03 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 04
console.log("== teste 04 ==");
fila.enfileirar(new Livro("Casais Inteligentes Enriquecem Juntos", "Gustavo Cerbasi", 192));
fila.enfileirar(new Livro("O Monge e o Executivo", "James C. Hunter", 159));
fila.enfileirar(new Livro("O Mundo de Sofia", "Jostein Gaarder", 560));
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 05
console.log("== teste 05 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 06
console.log("== teste 06 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 07
console.log("== teste 07 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 08
console.log("== teste 08 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 09
console.log("== teste 09 ==");
fila.enfileirar(new Livro("Casais Inteligentes Enriquecem Juntos", "Gustavo Cerbasi", 192));
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 10
console.log("== teste 10 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 11
console.log("== teste 11 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 12
console.log("== teste 12 ==");
fila.enfileirar(new Livro("Casais Inteligentes Enriquecem Juntos", "Gustavo Cerbasi", 192));
fila.enfileirar(new Livro("O Monge e o Executivo", "James C. Hunter", 159));
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 13
console.log("== teste 13 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 14
console.log("== teste 14 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);

// teste 15
console.log("== teste 15 ==");
console.log(fila.desenfileirar());
console.log("---");
fila.imprimirFila();
console.log(`Quantidade de elementos: ${fila.tamanhoDaFila()}`);
