const express = require("express");  //requiring express for create server
const app = express(); //instance of express


const logger = require("morgan"); //loging
app.use(logger('dev'))

app.use(express.json()); // to parse incoming json data
app.use(express.urlencoded({extended: true})) //to parse incoming multi parse data



const PORT = 3000 //port number


require('./db collection/index')

const studentRouter = require('./routes/student')

app.use('/student', studentRouter) //sending api request to  all students


// app.get('/',(req,res) => {
//     try {
//         res.send('Welcome')
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// const keralaRouter = require('./routes/kerala')
// app.use('/kerala',keralaRouter); //

app.listen(PORT,()=>{
console.log(`Sever is running on ${PORT}`)
}) //this is where the seever starts listening.
