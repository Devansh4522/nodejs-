const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
let database='databassse'

async function dbConnect(){
    let result= await client.connect();
    let db=result.db(database)
    return db;
}


// async function dbConnect(){
//     let result= await client.connect();
//     let db=result.db(database)
//     let collection=db.collection('coll2');
//     let resp= await collection.find().toArray();
//     console.log(resp)

// }


// function dbConnect(){
//     client.connect().then((result)=>{
//         let db=result.db(database);
//         let collection=db.collection('coll2');
//         collection.find().toArray().then((resp)=>{
//             console.log(resp);
//         })
//     })
// }

module.exports=dbConnect;