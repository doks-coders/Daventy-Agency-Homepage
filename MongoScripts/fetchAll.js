import React from 'react'

import clientPromise from "../lib/mongodb"
import { database } from '../config'


const fetchAll = async () => {
    
        const client = await clientPromise
        const db = client.db(database)
        let allposts  = await  db.collection('posts')
        .find()
        .toArray()
       
       return(allposts);
   
       

       
}

export default fetchAll








