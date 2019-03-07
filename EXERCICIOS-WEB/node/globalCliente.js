require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // Evitar modificar ou criar objetos no   global
console.log(MinhaApp.nome)
