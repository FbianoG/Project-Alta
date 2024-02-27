const mongoose = require('mongoose')



async function ConnectDataBase() {
    try {
       const connectedDB =  await mongoose.connect(`mongodb+srv://alta:alta123@cluster0.gzsimsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        if (connectedDB) {
            console.log("DataBase connected!")
        }
    } catch (error) {
        console.log("Erro ao tentar conectar o DataBase:", error)
    }
}


module.exports = {
    ConnectDataBase,
}