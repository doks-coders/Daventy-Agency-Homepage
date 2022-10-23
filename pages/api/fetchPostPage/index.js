
import clientPromise from "../../../lib/mongodb"


export default async (req,res)=>{
    try {

        const { page = 1, limit = 2, category = '3D Animation',search } = req.query; 
        let categoryVarification = {}
        let values = {}
        if(category != 1) {categoryVarification = {category:category}}

        console.log({page,limit,category,search})

     const client = await clientPromise
     const db = client.db("test")


         //3D Animation, Architecture Design, 3D Modelling

         db.collection('posts').createIndex( { heading: "text" } )
         if(search !='') {
            let numberOfPosts  = await  db.collection('posts')
            .find()
            .toArray()

            let posts = numberOfPosts.filter(post=>post.heading.toLowerCase().includes(search.toLowerCase()))
          //  console.log(posts)
            res.status(200).json({posts,numberOfPosts:1});

        }else{
            values=categoryVarification

            let numberOfPosts  = await  db.collection('posts')
            .find(values)
            .toArray()
       
            let posts =  await db.collection('posts').find(values)
            .limit(limit * 1)
            .skip((page - 1) * limit).toArray();

            console.log({posts})
       
           res.status(200).json({posts,numberOfPosts:numberOfPosts.length});
        }
   
        




    } catch (err) {
    res.status(404).json({ message: err.message })
    }


}



