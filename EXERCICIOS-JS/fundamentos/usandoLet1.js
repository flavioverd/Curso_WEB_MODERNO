let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // a variavel let é visivel apaenas onde foi declarada e não interfere nas variveis golbais
}
console.log('fora =',numero)
// a variavel tipo let pode ter escopo global, funcao e de bloco