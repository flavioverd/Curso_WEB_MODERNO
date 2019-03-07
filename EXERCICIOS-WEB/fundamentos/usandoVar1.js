{
    {
        {
            {
                var sera = 'Será ????' // var é reconhecida no escopo gobal
                console.log(sera)      // se quiser var dentro de um escopo, tem que ser em uma função
            }
        }
    }
}

console.log(sera) // No JS a variavel tipo var é vista e acessivel tambem fora do bloco em que foi declarada desde que não seja uma função, é um objeto global.

// Agora um exemplo em função 
function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)