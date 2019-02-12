// pessoa -> 123 {...}
const pessoa = { nome: 'João'} // Mesmo o objeto sendo uma constante, conseguimos manipular seus atributos
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // Object.freeze impende de manipular o objeto por inteiro, não conseguimos mudar seus atributos.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})// Aqui um exemplo da criação de uma constante já com o freeze na sua ccriação
console.log(pessoaConstante)