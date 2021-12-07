const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const user = require('./models/user')

mongoose.connect('mongodb://localhost:27017/login-app-db')

const app = express()
app.use('/',express.static(path.join(__dirname,'static')))
app.use(bodyParser.json())

app.post('/api/register',async (req,res)=>{
    console.log(req.body)
    res.json({status:'ok'})
})

app.listen(9999,()=>{
    console.log('Server up at 9999')
})