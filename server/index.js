require('dotenv').config()
const express = require('express')
const mysql = require('mysql');

const app = express()
const PORT = process.env.PORT

// коннектимся к базе данных

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database: 'bleez',
    password : ''
  });

connection.connect(err => {
    if (err) {
        console.log(err)
        return err
    } else {
        console.log('ok')
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })

// роуты и настройки, чтоб стучаться с фронта

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
});

app.get('/shop', async (req, res) =>{
    connection.query("SELECT * FROM items", (err, result) =>{
        if (err) throw err
        console.log(result);
        res.send(result);
    })
})

app.get('/shop/:id', async (req, res) =>{
    const id = req.params.id
    connection.query("SELECT * FROM items WHERE id = ?", id, (err, result) =>{
        if (err) throw err
        console.log(result);
        res.send(result);
    });
})