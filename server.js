const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use (express.json())

mongoose.connect('MONGODB_URI')

const Student = mongoose.model('Student',{
    name: String,
    email:String,
    course:String
})

app.post('/students', async(req,res)=>{
    const students = await Student.find()
    res.json(students)
})
app.listen(3000)