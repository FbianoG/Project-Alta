const mongoose = require('mongoose')




const Patient = mongoose.model('patient', {
    name: String,
    plan: String,
    obs: String,
    nota: Boolean,
    conc: Boolean,
    int: Boolean,
})


const User = mongoose.model('user', {
    username: String,
    password: String,
})


module.exports = { Patient, User }
