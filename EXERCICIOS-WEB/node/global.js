// console.log(global)
global.MinhaApp = MinhaApp.freeze({  // aaqui adicionei o metodo frezze para não poder ser modificado
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema legal'
})

