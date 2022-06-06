const express = require("express")
const signUpUser = require("../../../models/user")


const router = express.Router()

router.get("/", (req, res)=> {
    res.send("Hi")
})

router.post("/", (req, res)=> {
    const signedUpUser = new signUpUser({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
    })
    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})


module.exports = router