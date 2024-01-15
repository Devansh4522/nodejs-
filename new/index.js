const http=require("http")
const fs=require("fs")


const hostname = '127.0.0.1';
const port = 3000;


let home=fs.readFileSync("./index.html")
let about=fs.readFileSync("./about.html")
let contacts=fs.readFileSync("./contacts.html")
let services=fs.readFileSync("./services.html")


const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url=='/'){
    res.end(home);
    }
    else if(url=='/abc'){
        res.end(contacts);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/services'){
        res.end(services);
    }
    else{
        res.statusCode = 404;
        res.end("404 not found")
    }
   
})
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
