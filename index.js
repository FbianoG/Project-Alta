const express = require('express')
const router = require('./src/routes/router')
const DB = require('./src/dataBase/db')

const app = express()
const port = 3000

const cors = require('cors')

app.use(cors());


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)


app.listen(port, () => {
    console.log(`Servidor funcionando na porta:`, port)
    DB.ConnectDataBase()
})