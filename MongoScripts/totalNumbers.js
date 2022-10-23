import React from 'react'

import clientPromise from "../lib/mongodb"
import { database } from '../config'


//Digital Marketing
//Explainer Videos
//Infographics

const totalNumbers = async () => {
   
        const client = await clientPromise 
        const db = client.db(database)
        let digitalMarketing  = await  db.collection('posts').find({category:"Digital Marketing"}).toArray()
        let socialMediaManagment  = await  db.collection('posts').find({category:"Social Media Management"}).toArray()
        let explainerVideos  = await  db.collection('posts').find({category:"Explainer Videos"}).toArray()
        let websiteDesign  = await  db.collection('posts').find({category:"Website Design"}).toArray()
       
        return({ digitalMarketing: digitalMarketing.length,
                socialMediaManagment: socialMediaManagment.length,
                explainerVideos:explainerVideos.length,
                websiteDesign:websiteDesign.length });
      
       
}

export default totalNumbers








