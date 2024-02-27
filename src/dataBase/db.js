const mongoose = require('mongoose')



async function ConnectDataBase() {
    try {
       const connectedDB =  await mongoose.connect(`mongodb+srv://alta:alta123@cluster0.s2g9xui.mongodb.net/?retryWrites=true&w=majority`)
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