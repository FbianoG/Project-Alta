const cors = require('cors')
const express = require('express')
const DB = require('./src/dataBase/db')
const app = express()


app.use(cors());

const router = require('./src/routes/router')


const port = 3000



app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)


app.listen(port, () => {
    console.log(`Servidor funcionando na porta:`, port)
    DB.ConnectDataBase()
})