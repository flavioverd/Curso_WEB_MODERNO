let num1 = 1
let num2 = 2

num1++ // operador unario acrescenta mais 1, pósfixado
console.log(num1)
--num1 //forma préfixada
console.log(num1)

console.log(++num1 === num2--) // Aqui a comparação é feita antes da segunda operação "num2--" pois ela esta pósfixado, então a compaarção é feita antes.
console.log(num1 === num2)