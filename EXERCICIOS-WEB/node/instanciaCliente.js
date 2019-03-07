const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // () invoca a função factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // usando o cache do node

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // criando um novo objeto com factory