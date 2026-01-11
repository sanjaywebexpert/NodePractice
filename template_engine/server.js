import express from 'express'
import path from 'path';

const app =  express()
app.use(express.static(path.join(path.resolve(), 'public')))

app.use(express.urlencoded({extended:true}))
 const product = [
    {title:'Samsung', price:'$657'},
    {title:'iPhone', price:'$987'},
    {title:'Gphone',price:'$363'}
 ]

app.get('/', (req, res)=>{
    const product = {
        title :"Sony",
        price : "8769"
    }
    //res.render('index.ejs', {product})
    res.render('userform.ejs')
    console.log('serving ejs file');
})

app.post('/users', (req, res)=>{
        console.log(req.body)
        //res.render('userform.ejs')
        res.json({topic:'form handling successfull'})
       // console.log('Form Submitted Successfully');
})

app.listen(3000, ()=>console.log('Server is running'));