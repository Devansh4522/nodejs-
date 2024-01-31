const dbConnect =require('./mongoIn1.js')



const insert =async()=>{
    const db= await dbConnect();
    let inser1=await db.collection('coll2').insertOne({name:'devansh',sap_example:'100001xxxx'})
    console.log(inser1)
}
insert();