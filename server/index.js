require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Application listening on port ${PORT}`)
})

app.get('/shop', (req, res)=>{
    res.send([
        {id: 1, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 2, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 3, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 4, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 5, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 6, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 7, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 8, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 9, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
    ])
})