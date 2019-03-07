// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma "função arrow" em uma variavel

const soma = (a, b) => { // função arrow é => // e substitui o function
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
// Sintaxe mais curta usando arrow 
const imprimir2 = a => console.log(a)
imprimir2('Its Nice !!!')