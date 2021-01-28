const express = require('express')
const { Client } = require('pg');
const server = express();
const cors = require('cors')
const bodyParser = require('body-parser')

// Middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())


const client = new Client({
    user: 'postgres',
    host: '192.168.1.254',
    database: 'comentarios',
    password: '123',
    port: 5004,
});

client.connect(err => {
    if (err) throw err;
    else {
       
    }
});



function queryDatabase() {
  
    
    client.query('SELECT * FROM comentarios;')
        .then(res => console.log( res.rows[0]))
       
}
server.post('/comentar', (req,res)=>{
    res.send(req.body)

    const sql = 'INSERT INTO comentarios(nome,productname) VALUES ($1,$2);';
    const values = [req.body.nome, req.body.comentario];
     client.query(sql, values);
      
    
   


})
server.get('/comentarios', (req, res)=>{
    
        
    client.query('SELECT * FROM comentarios;')
        .then(res1 =>   res.send(res1.rows))
        console.log("resposta");
   

})

server.listen(3100);
