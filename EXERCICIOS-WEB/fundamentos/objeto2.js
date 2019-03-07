console.log(typeof Object)
console.log(typeof new Object) // instanciando uma função, comparando JAVA "chamando um construtor"

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015 (ES6) // uma classe tambem é uma funçaõ em JS
console.log(typeof Produto)
console.log(typeof new Produto())