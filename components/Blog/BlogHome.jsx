import React from 'react'
import { useContext,useState } from 'react';
import 'primeicons/primeicons.css';
import { Box, Flex, Heading, Link, Button, Container, Text, Input,  } from '@chakra-ui/react'
import PostElement from './PostElement';
import BlogLayout from './BlogLayout';

import { GlobalContext } from '../../Context/GlobalContext';


import Pagination from '../PrimeComponents/Pagination'


import Router from 'next/router'
import { formatHeadingLink } from '../../config';





const PostPage = ({blogArticles,numberofPosts,totalNumber,recentItems,categoryEl,pageEl}) => {

   



    let [indexOfPage,setIndexOfPage] = useState(1)
  
    const [basicFirst, setBasicFirst] = useState(4);

let [index,setIndex] = useState(1)
      
    
    const showIndex = (el)=>{

 let page = el.page

 setIndex(page)

 console.log(categoryEl)

        Router.push({
            pathname: '/blog',
            query: { page: ( page+1),category:categoryEl}
        })
        
    }

  return (
    <Box>
 
        <BlogLayout  totalNumber={totalNumber}  categoryEl={categoryEl} recentItems={recentItems}>
        <PostElements postElements={blogArticles} />
        <Flex maxWidth={{base:"100%",sm:"100%",md:"90%"}} justifyContent={'center'}>
        <Pagination setBasicFirst={setBasicFirst} basicFirst={basicFirst} indexEntered={pageEl} total={numberofPosts} onIndexChange={showIndex}/>
        </Flex>
       
            </BlogLayout>
        

    </Box>
  )
}

export default PostPage


let PostElements = ({postElements})=>{

   
    return(
        <>
        {
            postElements.map((val,index)=>(
           
                <PostElement
                key={index}
                image={val.image}
                heading={val.heading}
                name={val.author}
                authorImage={val.authorImage}
                date={val.date}
                preview={val.message[0].value}
                comments={ (val.comments)?val.comments.length:0}
                indexEL={formatHeadingLink(val.heading) }
            />
               
            ))
        }
        </>
    )
}

const uid = ()=>{
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for( let i=0; i < 10; i++ ){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
   }
   return  text;
  
  }
/**
 *   
 */