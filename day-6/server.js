//server start and database ko connect karna

const app = require('./src/app')

const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect("mongodb+srv://yogesh:6aL6DSmjpNoqqWeS@cluster0.zef7tqx.mongodb.net/day-6")
    .then(()=>{
        console.log("Connected to databse");
        
    })
}
connectToDb()

app.listen(3000 ,() =>{
    console.log("Server is running on port 3000");
    
})