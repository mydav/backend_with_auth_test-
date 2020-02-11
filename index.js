const express = require("express")
const atob = require("atob")
const dotenv = require("dotenv")
dotenv.config()
const server = express()
const mongoose = require("mongoose")
const authRouter = require("./src/routes/auth")
const { basic, adminOnly, setUserInfo } = require("./src/utils/auth")


const connection = mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true})
connection.then(db => console.log("connected to mongo"), err=> console.log(err))

server.use(express.json())
server.use("/auth", authRouter)

server.get("/testAuth", basic, setUserInfo, async (req, res) =>{
    res.send(req.user)

})

// const users = [
//     {
//         username: "diego",
//         password: "admin"
//     },
//     {
//         username: "strive",
//         password: "school"
//     }
// ]

// server.get("/test", async(req, res)=>{
//     const authHeader = req.headers["authorization"]
//     console.log(authHeader)
//     if (authHeader){
//         //in the header we are gonna have Basic base64(username:password)
//         const usernameAndPasswordInBase64 = authHeader.split(" ")[1]
//         const usernameAndPasswordInClear = atob(usernameAndPasswordInBase64)
//         const username = usernameAndPasswordInClear.split(":")[0]
//         const password = usernameAndPasswordInClear.split(":")[1]
        
//         const existingUser = users.find(user => user.password === password && user.username === username)
//         if (existingUser)
//             res.send("OK")
//         else 
//             res.status(401).send("USER NOT FOUND")
//         // res.send(usernameAndPasswordInClear)
//     }
//     else{
//         res.status(401).send("UNAUTHORIZED")
//     }
    
// })


server.listen(process.env.PORT || 3500, ()=> console.log("Running!"))