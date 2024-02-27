const express = require('express')
const cors = require('cors')
const router = require('./src/routes/router')
const DB = require('./src/dataBase/db')

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    exposedHeaders: 'Authorization',
}

app.use(cors(corsOptions))

const app = express()
const port = 3000



app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)


app.listen(port, () => {
    console.log(`Servidor funcionando na porta:`, port)
    DB.ConnectDataBase()
})