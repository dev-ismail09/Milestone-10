const express = require('express')
const app =  express()
const cors = require('cors')
const port = 5000

const categories = require('./data/catagories.json')
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Data Loading...')
})

app.get('/categories', (req, res) =>{
    res.send(categories)
})

app.get('/news', (req, res) =>{
    res.send(news)
})

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const selectNews = news.find(n => n._id === id);
    res.send(selectNews)
})

app.get('/categories/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(news)
    }
    else{
        const catagoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(catagoryNews)
    }
})

app.listen(port, ()=>{
    console.log(`Data Loading in port ${port}`)
})