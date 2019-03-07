function falarDepoisDe(segundos, frase) { // promises são retornos de callbacks sincronizados, ou seja espera a resposta se foi solucionado ou não a requisição
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
    