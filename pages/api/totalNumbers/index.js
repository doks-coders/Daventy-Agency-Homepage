
import clientPromise from "../../../lib/mongodb"



export default async (req,res)=>{
    try {
     const client = await clientPromise
     const db = client.db("test")
     let animation  = await  db.collection('posts').find({category:"3D Animation"}).toArray()
     let design  = await  db.collection('posts').find({category:"Architecture Design"}).toArray()
     let modelling  = await  db.collection('posts').find({category:"3D Modelling"}).toArray()
    
     res.status(200).json({ animation: animation.length,design: design.length,modelling:modelling.length });
    } catch (err) {
    res.status(404).json({ message: err.message })
    }


}



