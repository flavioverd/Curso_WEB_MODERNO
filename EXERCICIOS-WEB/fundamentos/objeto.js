const prod1 = {}  // Qualquer variavel ou array é um objeto em JS
prod1.nome =  'Celular Ultra Mega' // e aplicando um ponto na frente do objeto vc declara atributo ao objeto
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1) 
// prod 2 é um exemplo de uma estrutura aninhada com objeto e seus atributos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2 // exemplo de que um objeto pode ter o mesmo nome, porem não esta na mesma hierarquia
        }
    }
}

console.log(prod2)