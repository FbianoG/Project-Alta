const router = require('express').Router()
const control = require('../controllers/controller')
const mid = require("../middlewares/jwtoken")



router.get("/", async (req, res) => {
    res.json({ message: "Tudo certo" })
})

router.post("/login", control.login)

router.post("/getPatient",  control.getPatient)

router.post("/updatePatient", mid.verifyToken, control.updatePatient)



module.exports = router