
const dbConnect=require('./mongoPractice')

const insert=async()=>{
    const db= await dbConnect();
    const result = await db.collection('videos').insertOne(
        {no:'two3',name:'second-videaao',data:'16/01/2024'}
    );
    console.log(result)
}
insert();

