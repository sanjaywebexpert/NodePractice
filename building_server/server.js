import http from 'http'

// Creating server

const server = http.createServer((req, res)=>{
    console.log('request url',req.url);
    console.log('Sever started');
    if(req.url==="/sanjay"){
         res.end("Sanjay  called this requiest");
    }
    else if(req.url==="/ram"){
        res.end("ram called this requiest");
    }else{
        res.end("Invalid url");
    }

    //const datess =  new Date();
   // console.log(`Server started at ${datess}`)
    //res.end("Thank you for your request");
})

const port = 3000
server.listen(port,()=>console.log(`server is running at post ${port}`))