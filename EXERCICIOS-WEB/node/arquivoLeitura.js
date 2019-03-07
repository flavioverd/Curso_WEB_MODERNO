// fileSystem é um modulo dentro do node é usado para leitura de arquivos e diretorios
const fs = require('fs')

const caminho =__dirname + '/arquivo.json'  // __dirname é uma constante que esta disponivel nos pacotes do node e quer dizer diretorio atual

// sincrono...não recomendado, espera ler todo o arquivo, então se o arquivo a ler for grande melhor fazer assincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// para um arquivo .json tem essa maneira mais rapida

const config = require('./arquivo.json') // retorna o arquivo lido já transformado em objeto
console.log(config.db)

// leitura de pasta "diretorio"
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})