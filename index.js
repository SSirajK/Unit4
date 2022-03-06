const express = require('express')
const app = express()

app.get('/home', function (req, res){
    res.send('Hello')
})

app.get('/books', function (req, res){
    res.send(booki)
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})

const booki = ["books",{
    book1:{
        name: 'book 1',
        type: 'read'
    },
    book2:{
        name: 'book 2',
        type: 'write'
    },
    book3:{
        name: 'book 3',
        type: 'peek'
    },
    book4:{
        name: 'book 4',
        type: 'nothing'
    },
}]
