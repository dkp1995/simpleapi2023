const express = require('express')
const app = express()

const mongoose = require('mongoose')

// getting the .env file 
require('dotenv').config()

const mongodb = process.env.DB

//Middleware 
// app.use('/posts', ()=>{
//     console.log('This is a middleware running everytime posts hit')
// })

const auth = ()=>{
    console.log('This is a middleware running everytime posts hit')
}

app.use(express.json())

// how to use external files for routes 
app.use(require('./Routes/posts'))



//routes 

app.get('/', (req, res) => {
    res.send('We are on home')
})

app.get('/posts', auth , (req, res) =>{
    res.send('We are on Post')
})

// connect to database mongodb 
mongoose.set('strictQuery', false)
mongoose.connect(
    mongodb,
    ()=>{
    console.log('connected to mongodb')
    }
)

// starting listening to the server 
app.listen(8000, ()=>{

    console.log(`Server is running on port 8000`)
})