const express=require('express')
const app=express()
const hostname='127.0.0.1'
const port=8000
const path=require('path')
const rpath=path.join(__dirname,'new')
app.get('/',(req,res)=>{
    res.sendFile(`${rpath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${rpath}/about.html`)
})
app.get('/contacts',(req,res)=>{
    res.sendFile(`${rpath}/contacts.html`)
})
app.listen(8000,()=>{
    console.log(`listening at http://${hostname}:${port}/`)
});