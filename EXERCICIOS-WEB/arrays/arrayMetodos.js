const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // pop retira o ultimo elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // adiciona ultimo elemento na lista
console.log(pilotos)

pilotos.shift() // shift remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//splice adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// splice removendo
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // slice gera novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)