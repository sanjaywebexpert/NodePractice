import shortid from "shortid";
import {Url} from '../Models/url.js';

export const urlShort = async (req, res) =>{
    const longUrl = req.body.longUrl;
    const shortcode = shortid.generate();
    const shorturl = `http://localhost:7001/${shortcode}`;

     //save to db
  const newUrl = new Url({ shortcode, longUrl });
  await newUrl.save();
  //console.log("url shorted successfully..",newUrl)
    res.render("index.ejs", { shorturl });

}

export const getOriginalUrl = async (req, res)=>{
    console.log('urlgetttreq new:  ',req.params.shortcode);
    const shortcode = req.params.shortcode;
    const urlRecored = await Url.findOne({shortcode});
    console.log('urlRecored new:  ',urlRecored);
    if (urlRecored){
        res.redirect(urlRecored.longUrl)
   }else{
        res.status(404).send("Url not found")
   }
}