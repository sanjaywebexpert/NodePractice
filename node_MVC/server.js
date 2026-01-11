import express from 'express'
import mongoose from 'mongoose'
import {AddUser} from './Controllers/user.js'

const app = express()
app.use(express.urlencoded({extended:true}))

mongoose.connect(
    "mongodb+srv://sanjayraghusharma_db_user:QKZHslplW6RQLDZc@cluster0.lrw3uhd.mongodb.net",{
        "dbName":'test_users'
    }
).then(console.log("Mongoose connected")).catch((error)=>console.log(error));

const port = 7000
app.listen(port, ()=>{ console.log(`Server is runing on port ${port}`)})

app.get('/',(req, res)=>{
    res.render('index.ejs')
})

app.post('/add_user', AddUser)