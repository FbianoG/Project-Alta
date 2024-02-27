const mongoose = require('mongoose')




const Patient = mongoose.model('patient', {
    id: String,
    name: String,
    plan: String,
    obs: String,
    nota: Boolean,
    conc: Boolean,
    int: Boolean,
    alta: Boolean,
    salta: Boolean,
})


const User = mongoose.model('user', {
    username: String,
    password: String,
})


module.exports = { Patient, User }
