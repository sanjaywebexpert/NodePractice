import express from 'express';
import mongoose from 'mongoose';
import {urlShort, getOriginalUrl} from './Controllers/shorturl.js';

const app = express()
app.use(express.urlencoded({extended:true}))

mongoose.connect(
    "mongodb+srv://:",{
        "dbName":'dbname'
    }
).then(console.log("Mongoose connected")).catch((error)=>console.log(error));



app.get('/',(req,res)=>{
    res.render("index.ejs",{shorturl:null})
  })
// handle url submission
  app.post("/shorten", urlShort);

    // redirect to original url using short url
  app.get("/:shortcode", getOriginalUrl);

  const port = 7001
app.listen(port, ()=>{ console.log(`Server is runing on port ${port}`)})