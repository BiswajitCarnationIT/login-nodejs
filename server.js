const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const user = require('./models/user')
const bcrypt = require('bcryptjs')

mongoose.connect('mongodb://localhost:27017/login-app-db')

const app = express()
app.use('/',express.static(path.join(__dirname,'static')))
app.use(bodyParser.json())

bcrypt

app.post('/api/register',async (req,res)=>{
    console.log(req.body)
    // Analysts
    //open API

    console.log(await bcrypt.hash(req.body.password,10))
    // Hashing the passwords
    res.json({status:'ok'})
})

app.listen(9999,()=>{
    console.log('Server up at 9999')
})