const tecnologias = new Map()
tecnologias.set('react', { framework: false }) // react é a chave e framework é o valor
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)  //desssa forma não funciona
console.log(tecnologias.get('react').framework) // forma correta de chamar um map

const chavesVariadas = new Map([   // exemplo de map com tres chaves e três valores, impossivel fazer isso som um objeto
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a') // estrutura map não aceita repetição de chaves, mas aceita de valores
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
