import express from 'express'
import path from 'path'

const app = express()
const port = 8000

const dir = path.resolve()
app.get('/', (req, res)=>{
    //res.end('Hi this is express');
     //res.send("<h1>This Your Response</h1>");
     console.log(path.resolve())

    const url =  path.join(dir,'./index.html')
    console.log(url);
    res.sendFile(url)
});
app.get('/about', (req, res)=>{
    res.end('This is about us page');
});
app.get('/product', (req, res)=>{
res.json({
    products : [
        {title:"Samsung", price:"$765"},
        {title:"iPhone", price:"$987"}
    ]
})
})
app.all('/404', (req,res)=>{
    res.status(404).send('404 - page not found')
});
app.listen(port, ()=>{
    console.log('Example of app')
});