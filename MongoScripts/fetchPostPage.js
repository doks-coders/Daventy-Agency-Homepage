import React from 'react'

import clientPromise from "../lib/mongodb"
import { database } from '../config'

const fetchPostPage = async ({page,limit,category,search}) => {
    
      
            let categoryVarification 
            let values 
            if(category != 1) {categoryVarification = {category:category}}
    
            console.log({page,limit,category,search})
    
         const client = await clientPromise
         const db = client.db(database)
    
    
             //3D Animation, Architecture Design, 3D Modelling
    
             db.collection('posts').createIndex( { heading: "text" } )
             if(search !='') {
                let numberOfPosts  = await  db.collection('posts')
                .find()
                .toArray()
    
                let posts = numberOfPosts.filter(post=>post.heading.toLowerCase().includes(search.toLowerCase()))
              //  console.log(posts)
                return({posts,numberOfPosts:1});
    
            }else{
                values=categoryVarification
    
                let numberOfPosts  = await  db.collection('posts')
                .find(values)
                .toArray()
           
                let posts =  await db.collection('posts').find(values)
                .limit(limit * 1)
                .skip((page - 1) * limit).toArray();
    
                console.log({posts})
           
               return({posts,numberOfPosts:numberOfPosts.length});
            }

}

export default fetchPostPage




/**
 * import React from 'react'

import clientPromise from "../lib/mongodb"

const fetchPostPage = async ({ page, limit, category, search }) => {

    return new Promise( async (resolve, reject) => {
        let categoryVarification = {}
        let values = {}
        if (category != 1) { categoryVarification = { category: category } }

        console.log({ page, limit, category, search })

        const client = await clientPromise
        const db = client.db("test")


        //3D Animation, Architecture Design, 3D Modelling

        db.collection('posts').createIndex({ heading: "text" })
        if (search != '') {
            let numberOfPosts = await db.collection('posts')
                .find()
                .toArray()

            let posts = numberOfPosts.filter(post => post.heading.toLowerCase().includes(search.toLowerCase()))
            resolve ({ posts, numberOfPosts: 1 });

        } else {
            values = categoryVarification

            let numberOfPosts = await db.collection('posts')
                .find(values)
                .toArray()

            let posts = await db.collection('posts').find(values)
                .limit(limit * 1)
                .skip((page - 1) * limit).toArray();

            console.log({ posts })

            resolve ({ posts, numberOfPosts: numberOfPosts.length });

        }
        
    })


}


export default fetchPostPage









 */








