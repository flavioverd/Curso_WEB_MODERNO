// Cadeia de protótipos (prototype chain)
Object.prototype.atrb0 = '0'
const avo = { atrb1: 'A'}
const pai = { __proto__: avo, atrb2: 'B', atrb3: '3'}
const filho = { __proto__: pai, atrb3: 'C'}
console.log(filho.atrb0, filho.atrb1, filho.atrb2, filho.atrb3)

const carro = {
    velAtual: 0,
    vleMax: 200,
    acelerarMAis(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.vleMax
        }
    },
    status() {
        return `${this.velAtual}KM/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)