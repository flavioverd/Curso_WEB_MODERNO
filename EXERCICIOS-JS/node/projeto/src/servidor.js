const porta = 3003

const express1 = require('express')  // import express que esta em node_modules
const app = express1()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())  
})

app.get('/produtos/:id,', (req, res, next) => { // app.get para consultar e obter valor do BD , é como um select.
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => { // app.post para incluir valor no BD , é como um insert.
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //retorna em formato JSON  
})

app.put('/produtos/:id', (req, res, next) => { // app.put para alterar ou modificar valor no BD , é como um update.
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //retorna em formato JSON  
})

app.delete('/produtos/:id', (req, res, next) => { // app.delete para excluir valor no BD , é como um delete.
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //retorna em formato JSON  
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
