const dbConnect=require('./mongoPractice');


const updateData=async()=>{
    let db=await dbConnect();
    let resp=await db.collection('videos').updateOne({no:'two1'},{$set:{name:'third-video'}})
}
updateData();