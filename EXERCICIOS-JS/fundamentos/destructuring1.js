// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// Essa linha abaixo é um comando destructuring, ou seja (esta tirando os atributos nome e idade do objeto pessoa)
const { nome, idade } = pessoa
console.log(nome, idade)
// Aqui estou apontando a variavel n em nome e i em idade
const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
//Abaixo um exemplo a não seguir: tentar destructing com atributo inexistentes
//const { conta: { ag, num } } = pessoa
//console.log(ag, num)
