const router =  require("express").Router()
const studentData = require('../model/student')

//CREATE
router.post('/', async(req, res) => {
    try {
        console.log(req.body)
        let item = req.body
        const savedData = await studentData(item);  //crosschecking criteria before saving data
        savedData.save();
        res.send('sucess')

    } catch (error) {
        console.error(error)
    }
})



//READ
 router.get('/', async(req,res)=>{
    try {
        let data = await studentData.find({})
        res.send(data)

    } catch (error) {
        console.error(error)
        res.send('error')
    }
 })






//UPDATE

router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id
        console.log('id check', id)
        let updateData = {$set: req.body}
        const updated = await studentData.findByIdAndUpdate(id, updateData)
        res.json(updated)

    } catch (error) {
        console.log(error)
        res.send('error')
    }
})



//DELETE

router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id
        console.log('id check', id)
        
        const updated = await studentData.findByIdAndDelete(id)
        res.send('deleted')

    } catch (error) {
        console.log(error)
        res.send('error')
    }
})



module.exports = router