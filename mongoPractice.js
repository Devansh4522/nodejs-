const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
let database='youtube'

// async function dbConnect(){
//     let result=await client.connect();
//     let db=result.db(database);
//     return collection=db.collection('videos');
// }

async function dbConnect(){
    let result=await client.connect();
    let db=result.db(database);
    return db;
}

module.exports=dbConnect;

