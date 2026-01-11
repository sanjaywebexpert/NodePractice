import mongoose from "mongoose";
const urlSchema = new mongoose.Schema({
    shortcode:{
        type:String
    },
    longUrl:{
        type:String
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

export const Url = mongoose.model("shortUrlNew",urlSchema)