require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')


const tmServer = express()

tmServer.use(cors())
tmServer.use(express.json())
tmServer.use(router)

const PORT = 3000 || process.env.PORT

tmServer.listen(PORT,()=>{
    console.log(`tmServer started at port ${PORT} and waiting for client request!!!`);
    
})
tmServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:blue;">tmServer started at port and waiting for client request!!! </h1>`)
})
