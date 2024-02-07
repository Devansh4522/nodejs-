const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'
const client=new MongoClient(url);
let database='youtube';


async function dbConnect(){
    let result =await client.connect();
    let db=result.db(database);
    let collection =db.collection('videos');
    let response=await collection.find().toArray();
    console.log(response);
}
dbConnet();




    // function getData(){
    // client.connect().then((result)=>{
    // let db=result.db(database);
    // let collection =db.collection('videos');
    // collection.find().toArray().then((response)=>{
    //     console.log(response);
    // }) 
    // })
    
    

