const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://HarshaVilasraoNikhade:harsha123@cluster0.znhrbrv.mongodb.net/')
.then(()=>{
    console.log('Mongodb connection established sucessfully')
})
.catch(err => console.log('Eroor connection',err))
