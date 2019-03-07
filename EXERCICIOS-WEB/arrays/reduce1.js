// reduce é uma função para percorrer array e transformar em um array novo do mesmo tipo ou não, e vai acucmulando o resultado "elemento novo" com o elemento anterior
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.3, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: false},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a =>nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

conssole.log(resultado)
