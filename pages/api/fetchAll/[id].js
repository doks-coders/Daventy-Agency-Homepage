
import clientPromise from "../../../lib/mongodb"


export default async ({query:{id}},res)=>{
    try {

    
     const client = await clientPromise
     const db = client.db("test")
     
     let post =  await db.collection('posts').find().toArray()


    //let time = await db.collection('posts').find({}).getTimestamp()
    //console.log(time)
  
    // db.collection.find({_id:ObjectId('5e208c18d598b806c869ca37')}).pretty()

     const filtered = post.filter(post=>post._id == id)
     if (filtered.length >0){
        console.log(filtered[0])
         res.status(200).json(filtered[0])
     }else{
         res.status(404).json({message:`Id of ${id} is not found`})
     }

    // res.status(200).json({ total: allposts.length, posts });

    } catch (err) {
    res.status(404).json({ message: err.message })
    }


}


