const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.use(express.static('public'))

const produtos = [
    {id: 1, nome: 'Bola de futebol', imagem:'https://cdn.awsli.com.br/170/170611/produto/22191476978722ab407.jpg', marca: 'Topper', descrição: 'Bola redonda'}, 
    {id: 2, nome: 'Chuteira', imagem:'https://d2p7wtszppk2p4.cloudfront.net/Custom/Content/Products/58/89/58890_chuteira-futsal-umbro-neo-striker-pr-7852-943331_m1_637969454860042875.jpg', marca: 'Umbro', descrição: 'Chuteira de couro tamanho 41'}, 
    {id: 3, nome: 'Camisa de time', imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/479/469/products/nova-camisa-sao-paulo-2023-3-frente1-7c17b5b8af23ece5ab16806204977724-640-0.jpg', marca: 'Nike', descrição: 'Camisa do time São Paulo'}
]

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/:id', (req, res) =>{
    const id = req.params.id
    const produto = produtos.find((p) => p.id == Number(id))

    res.render('produto', {produto})
})



app.get('/', (req, res) => {
    res.render('home', {produtos})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})