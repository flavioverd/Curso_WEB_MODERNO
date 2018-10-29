const valores = [7.7, 8.9, 6.3, 9.2] // Arrays são vetores com variaveis com ou sem valores
console.log(valores[0], valores[3]) // Essas váriaveis contem indices "posições" dentro do array
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)