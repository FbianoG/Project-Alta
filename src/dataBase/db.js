const mongoose = require('mongoose')



async function ConnectDataBase() {
    try {
       const connectedDB =  await mongoose.connect(`mongodb+srv://alta:123@cluster0.0envcid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
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