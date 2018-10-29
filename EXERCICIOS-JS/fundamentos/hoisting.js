// hoisting é içar "mover uma declaração ao topo", isso é uma caracteristica padrão do JS
//Só acontece com o var
console.log('a =', a)
var a = 2
console.log('a =', a)

// com let não acontece o hoisting
console.log('b =', b)
let b = 2
console.log('b =', b)