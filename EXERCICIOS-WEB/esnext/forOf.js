//forIn percorre o indice e forOf percorre valor
for (let letra of "Cod3r") {   
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// percorrendo indice
for (let i in assuntosEcma) { 
    console.log(i)
}

// percorrendo valor
for (let assunto of assuntosEcma) { 
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

// percorrendo com map chaves e valores
for (let assunto of assuntosMap) { 
    console.log(assunto)
}

// percorrendo com map somente chaves
for (let chave of assuntosMap.keys()) { 
    console.log(chave)
}

// percorrendo com map somente valores
for (let valor of assuntosMap.values()) { 
    console.log(valor)
}

// percorrendo as entradas com destruction chaves e valores "entradas ou entries" são arrays, registros de um map.
for (let [ch, vl] of assuntosMap.entries()) { 
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c']) // percorrendo um set
for (let letra of s) {
    console.log(letra)
}