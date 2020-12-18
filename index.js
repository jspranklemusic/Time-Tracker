const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const PORT = 8080

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(process.env.PORT|PORT,()=>{
    console.log(`Listening on port: ${PORT}`)
})
