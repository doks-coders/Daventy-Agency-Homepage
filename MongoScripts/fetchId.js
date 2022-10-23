import React from 'react'

import clientPromise from "../lib/mongodb"
import { database, formatHeadingLink } from '../config'

const fetchId = async ({id}) => {
   
        const client = await clientPromise
        const db = client.db(database)
        
        let post =  await db.collection('posts').find().toArray()
        console.log({post})

        const filtered = post.filter(post=> formatHeadingLink(post.heading)  == formatHeadingLink(id))

        console.log({filtered,id})

        if (filtered.length >0){
           console.log(filtered[0])

           return filtered[0]
 
        }else{
            return ({message:`Id of ${id} is not found`})
        }
   
       
       
}

export default fetchId








