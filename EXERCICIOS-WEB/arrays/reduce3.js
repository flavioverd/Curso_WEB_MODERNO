Array.prototype.reduce3 = function(callback, valorInicial) {
    const indiceIninial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceIninial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce3(soma, 21))