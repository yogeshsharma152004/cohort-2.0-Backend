const mongoose = require("mongoose")


function conntectToDb (){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database is connected");
    })
}

module.exports = conntectToDb