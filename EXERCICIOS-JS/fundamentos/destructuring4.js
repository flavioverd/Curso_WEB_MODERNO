function rand([min = 0, max = 1000]) {           // atributos min e max
    if (min > max) [min, max] = [max, min]       // uma vez desestruturado  temos somente 2 atributos e não mais um array, por isso declaro novamente outro array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand()) // exemplo de undefined
 
