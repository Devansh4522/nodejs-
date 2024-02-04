const dbConnect=require('./mongoIn1')


// dbConnect().then((collection)=>{
//  collection.find().toArray().then((resp)=>{
//     console.log(resp)
//  })
// })


// const data=async ()=>{
//     let collection = await dbConnect();
//     let resp =await collection.find().toArray();
//     console.log(resp);
// }
// data();

const data=async ()=>{
    let db = await dbConnect();
    let resp =await db.collection('videos').find().toArray();
    console.log(resp);
}
data();