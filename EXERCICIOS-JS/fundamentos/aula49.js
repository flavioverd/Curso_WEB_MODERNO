let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
onsole.log(module.exports)

//Criando uma variavel maluca: sem var e let!
abc = 3 //não faça isso em casa !!!!!
console.log(globa.abc) // quando criada uma variante sem var e let, ela fica acessivel no escopo global

// module.exports = { e: 456, f: false, g: 'teste' }