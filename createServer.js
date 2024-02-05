const http=require("http")
const fs=require("fs")
let xyz=fs.readFileSync("new/index.html")
const server=http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html'})
    res.end(xyz)
})
server.listen(80,'127.0.0.1',()=>{
    console.log('server listening on port 80')
})

// const http=require("http")
// const hostname='127.0.0.1'
// const port=4000
// const fs=require("fs")
//  let xyz=fs.readFileSync("new/index.html")
// const server=http.createServer((req,res)=>{
//     res.writeHead({'Content-type':'text/html'})
//     res.end(xyz)
// })

// server.listen(port,hostname,()=>{
//     console.log(`listening at http://${hostname}:${port}/`)
// })