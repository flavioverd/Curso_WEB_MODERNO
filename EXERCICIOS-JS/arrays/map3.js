Array.prototype.map2 = function(callback) { // map implementado só para observar seu funcionamento
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }', // conjunto de elementos JSON
    '{ "nome": "Caderno", "preco": 13.45 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.45 }',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // transforma JSON em objeto JS
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)