const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }', // conjunto de elementos JSON
    '{ "nome": "Caderno", "preco": 13.45 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.45 }',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // transforma JSON em objeto JS
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)