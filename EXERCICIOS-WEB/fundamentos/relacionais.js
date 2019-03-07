console.log('01)', '1' == 1) // u = é atribuição, 2 == é oprador relacional igua
console.log('02)', '1' === 1) // 3 === é comparação de igual, mas compara o tippo tambem
console.log('03)', '3' != 3) // != diferente
console.log('04)', '3' !== 3) // !== estritamente diferente, compara tipos tambem

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('12)', undefined === null)