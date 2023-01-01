const express = require('express')
const router = express.Router()

const Model = require('../model/model.js')

router.get('/', (req, res)=>{
    res.send('hello world')
})

router.get('/getit/:id', async (req, res)=>{
    const data = await Model.findById(req.params.id)
    res.json(data)
})

router.post('/add', async ( req, res)=>{

    console.log(req.body.age)
    console.log(req.body.name)

    const mydata = new Model({
        name: req.body.name,
        age: req.body.age

    })

    const datatosave = await mydata.save()
    res.status(200).json(datatosave)
})

router.get('/getall', async (req, res)=>{

    const data = await Model.find()
    res.json(data)
})

router.patch('/update/:id', async (req, res)=>{
    const id = req.params.id
    const updateDate = req.body
    const options = { new : true }

    const result = await Model.findByIdAndUpdate(id,updateDate,options)
    res.send(`Data has been updated ${result}`)
})

router.delete('/delete/:id', async (req, res)=>{
    const result = await Model.findByIdAndDelete(req.params.id)
    res.send(`Document with has been deleted`)
})


module.exports = router