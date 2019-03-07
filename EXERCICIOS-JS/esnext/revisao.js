// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`) // isso é uma Template String

const produto1 = 'iPad'
console.log(`${produto1} é 
muito 
caro!`) // Template String possibilita quebar linha apenas pulando linha no codigo tambem. 

// Destructuring para desestruturar tirar conteudo
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)