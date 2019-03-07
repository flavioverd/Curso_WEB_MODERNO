Array.prototype.forEach2 = function(callback) {  // foreach criado 
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Aghata', 'Aldo', 'DAniel', 'Raquel'] 
 aprovados.forEach2(function(nome, indice, ) {
     console.log(`${indice + 1}) ${nome}`)
      })