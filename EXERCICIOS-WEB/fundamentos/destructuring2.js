const [a] = [10] //EM arrays usa-se [] para destructing e para objetos se usa chaves
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // O que diferencia o destructing de um array é o lado que está da operação, se tiver do lado esquerdo é destructing, se tiver do lado direito é array
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [0, 6, 8]]
console.log(nota)