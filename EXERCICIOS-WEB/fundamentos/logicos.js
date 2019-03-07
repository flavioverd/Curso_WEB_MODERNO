function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário "negação logica"

    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // no ecma 2015, a criação de objetos não precisa mais declarar o nome e valor, só  o valor já instancia o objeto e nomea com o proprio valor.
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))