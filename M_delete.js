const dbConnect=require('./mongoPractice');

const deleteData=async ()=>{
    const db=await dbConnect();
    let data=db.collection('videos').deleteOne({no:'two3'})
}
deleteData();