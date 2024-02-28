const cors = require('cors')
const express = require('express')
const DB = require('./src/dataBase/db')
const app = express()













app.use(cors());


const router = require('./src/routes/router')



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true); // Se você estiver usando credenciais

    // Permitir que o navegador envie solicitações OPTIONS (usado para preflight)
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});







const port = 3000



app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)


app.listen(port, () => {
    console.log(`Servidor funcionando na porta:`, port)
    DB.ConnectDataBase()
})