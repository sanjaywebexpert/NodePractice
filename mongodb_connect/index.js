//db username: sanjayraghusharma_db_user
// password: QKZHslplW6RQLDZc

// db url: mongodb+srv://sanjayraghusharma_db_user:<db_password>@cluster0.lrw3uhd.mongodb.net/

import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose.connect(
    "mongodb+srv://sanjayraghusharma_db_user:QKZHslplW6RQLDZc@cluster0.lrw3uhd.mongodb.net",{
        "dbName":'sanjayraghusharma_db_user'
    }
).then(console.log("Mongoose connected")).catch((error)=>console.log(error));

const port = 7000
app.listen(port, ()=>{ console.log(`Server is runing on port ${port}`)})