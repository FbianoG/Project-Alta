const { Patient, User } = require('../models/model')
const mid = require("../middlewares/jwtoken")



async function login(req, res) {
    try {
        let { username, password } = req.body
        if (!username || !password) {
            username = "123"
            password = "123"
            // const userFind = await User.findOne({ username, password })
            return res.status(400).json({ auth: false, status: 400, message: "Preencha todos os campos!", username, password })
        }
        // const userFind = await User.findOne({ username, password })
        if (!userFind) {
            return res.status(400).json({ auth: false, status: 400, message: "Login ou senha inválido!",  username, password })
        }
        const token = await mid.createToken(userFind._id)
        return res.status(200).json({ auth: true, status: 200, message: "Logado com sucesso!", token })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Ocorreu algum erro de servidor!" })
    }
}



async function getPatient(req, res) {
    try {
        // const id = req.userId

        const getPatient = await Patient.find({})
        return res.status(200).json(getPatient)
    } catch (error) {
        return res.status(500).json({ Message: "Ocorreu algum erro:", error })
    }
}



async function updatePatient(req, res) {
    try {
        let { id, name, plan, obs, nota, conc, int } = req.body
        name = name.toLowerCase()
        plan = plan.toLowerCase()
        const editPatient = await Patient.findByIdAndUpdate({ _id: id }, { name, plan, obs, nota, conc, int }, { new: true })
        if (!editPatient) {
            return res.status(400).json({ message: "Os dados não foram salvos. Paciente não encontrado!" })
        }
        return res.status(201).json({ Message: "Paciente atualizado com sucesso." })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ Message: "Ocorreu algum erro:" })
    }
}

async function updatePatientGL(req, res) {
    try {
        let { _id, leito } = req.body
        leito = leito.toLowerCase()
        const editPatient = await Patient.findByIdAndUpdate({ _id }, { leito })
        return res.status(201).json({ Message: "Leito atualizado com sucesso.", leito })
    } catch (error) {
        return res.status(500).json({ Message: "Ocorreu algum erro:" })
    }
}

async function updatePatientMed(req, res) {
    try {
        let { _id, alta } = req.body
        const editPatient = await Patient.findByIdAndUpdate({ _id }, { alta })
        return res.status(201).json({ Message: "Alta realizada com sucesso.", alta })
    } catch (error) {
        return res.status(500).json({ Message: "Ocorreu algum erro:" })
    }
}




module.exports = {
    getPatient,


    updatePatient,
    updatePatientGL,
    updatePatientMed,

    login,
}