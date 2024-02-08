const express=require('express');
const dbConnect=require('./mongoIn1.js')
const hostname='127.0.0.1'
const port=80
const app=express();

app.use(express.json());

app.get('/',async (req,resp)=>{
    const db= await dbConnect();
    const fd= await db.collection('coll2').find().toArray()
    resp.send(fd)
})

app.post('/',async (req,resp)=>{
    let db= await dbConnect();
     let x= await db.collection('coll2').insertOne(req.body);
    resp.send(x)
})

app.put('/',(req,resp)=>{
    let db=dbConnect();
    let x=db.collection('coll2').updateOne(
        {name:req.body},
        {$set: req.body}
    )
})

app.listen(port,hostname,()=>{
    console.log(`Server running on http://${hostname}:${port}/`)
})