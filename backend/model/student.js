const mongoose = require("mongoose");
const studentSchemea = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    age: {
        type:Number,
        required:true,
    },
    address: {
        type:String,
        createdAt: {
            type:Date,
            default: new Date()
        }
    
    }
})

const studentModel = mongoose.model('student', studentSchemea)
module.exports = studentModel