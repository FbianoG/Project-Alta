const express = require('express')
const router = require('./src/routes/router')
const DB = require('./src/dataBase/db')

const cors = require('cors')
const app = express()
const port = 3000


app.use(cors()) // Configurar CORS antes das rotas

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)


app.listen(port, () => {
    console.log(`Servidor funcionando na porta:`, port)
    DB.ConnectDataBase()
})