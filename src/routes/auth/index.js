const express = require("express")
const User = require("../../models/user")
const { basic } = require("../../utils/auth")

const router = express.Router()

router.get("/", basic, async (req, res)=>{
    res.send(await User.find({}))
})

router.post("/register", async(req, res)=>{
    try{
        console.log(req.body);
        const user = await User.register(req.body, req.body.password);
        res.send(user)
    }
    catch(exx){
        console.log(exx)
        res.status(500).send(exx)
    }
})

module.exports = router;