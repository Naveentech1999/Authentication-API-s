const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Routes = require("./routes/routes"); 
const bodyParser = require("body-parser");


const PORT = process.env.PORT || 8080
app.use(bodyParser.json())
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb connected successfully...")
})
.catch((error)=>{
    console.log("Error in connecting DB" ,error)
})



app.use("/auth-apis",Routes)


app.listen(PORT,()=>{
    console.log(`Server running on a ${PORT} Port...`)
})


 