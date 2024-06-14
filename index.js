const express = require('express');
const bodyParse = require('body-parser');

const app = express();
app.use( bodyParse.json());

let jsonData = []

app.get('/',function(req,res) {
    res.send('primeira rota')
});

app.get('/lista',function(req,res){
    res.send(jsonData)
});

app.post('/formulario',function(req,res){
    const data = req.body
    jsonData.push(data)
    res.send('dados enviados')
});


app.listen(3000,
    console.log(`O servidor está rodando na porta http://localhost:3000`)
);