

import clientPromise from "../../../lib/mongodb"


export default async (req,res)=>{
    const { search } = req.query; 
    try {
     const client = await clientPromise
     const db = client.db("test")
     let allposts  = await  db.collection('posts')
     .find( { 'heading' : { '$regex' : '', '$options' : 'i' } } )
     .toArray()
    
    res.status(200).json(allposts);

    } catch (err) {
    res.status(404).json({ message: err.message })
    }
}



