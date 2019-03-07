let valor // não inicializada
console.log(valor)

valor1 = null //ausência de valor
console.log(valor1) // se quiser zerar um valor faça com null evite deixar objetos ou atributo sem definição de valor.
// console.log(valor1.toString()) // Erro !

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // forma correta se eu quiser tirar o tributo preço
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
