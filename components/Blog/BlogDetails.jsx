import React from 'react'
import { useState, useEffect, useContext } from 'react';
import BlogLayout from "./BlogLayout";
import ContentElement from './ContentElement';
import { Box, Flex, Heading, Link, Button, Container, Text, Input, Image } from '@chakra-ui/react'



const BlogDetails = ({post,totalNumber,recentItems}) => {

  let [categoryEl,setCategoryEl] = useState(1)
 



  return (
    <BlogLayout totalNumber={totalNumber} recentItems={recentItems} setCategoryEl={setCategoryEl} categoryEl={categoryEl}>{
      /*
     
  */
      Object.keys(post).length ? (
        <>
          <ContentElement
            idEntered={post._id}
            category={post.category}
            tags={post.tags}
            image={post.image}
            heading={post.heading}
            author={post.author}
            authorBio={post.authorBio}
            socialMediaLinks={post.socialMediaLinks}
            date={post.date}
            message={post.message}
            comments={post.comments}
            authorImage={post.authorImage}
          />
        </>
      ) : 'Nothing'

    }

    </BlogLayout>
  )
}

export default BlogDetails




/**
 * 
 * useEffect(()=>{
    const getTasks = async()=>{
       const tasksFromServer = await fetchTasks()
       setTasks(tasksFromServer)
    }
    getTasks()
  },[])
  const fetchTasks = async ()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  const fetchTask = async (id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

const addTask = async (task)=>{
  const id = Math.floor(Math.random()*10000)+1
  console.log(id)
 await fetch('http://localhost:5000/tasks',{method:'POST',headers:{'Content-type':'application/json'},body:JSON.stringify(task)})

  const newTask = {id, ...task}
  console.log([...tasks, newTask])
  setTasks([...tasks, newTask])





}

const toggleReminder = async (id)=>{
  console.log(id)
 
let taskToToggle = await fetchTask(id)
let updtask = {...taskToToggle, reminder:!taskToToggle.reminder}

 const res =  await fetch(`http://localhost:5000/tasks/${id}`,{method:'PUT',headers:{'Content-type':'application/json'},body:JSON.stringify(updtask)})
const data= await res.json

setTasks(tasks.map((task)=> task.id===id?{...task, reminder:!task.reminder}:task))
}
/*
const res = await fetch('http://localhost:5000/tasks')

const res = await fetch(`http://localhost:5000/tasks/${id}`)

await fetch('http://localhost:5000/tasks',{method:'POST',headers:{'Content-type':'application/json'},body:JSON.stringify(task)})

const res =  await fetch(`http://localhost:5000/tasks/${id}`,{method:'PUT',headers:{'Content-type':'application/json'},body:JSON.stringify(updtask)})

await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})


const deleteTask = async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
    setTasks(tasks.filter((task)=>task.id !== id))
  }

 */















/**
 * <ContentElement

                category={'Movie Editing'}
                tags={['3D', 'Movies', 'Animation']}
                image={"Images/blog-1.jpg"}
                heading={"Being an American in Nigeria"}
                author={"John Doe"}
                authorBio={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus architecto incidunt adipisci veniam beatae omnis nemo soluta placeat quibusdam iste, velit amet repellat harum dicta laudantium eaque dolores impedit?
                                `}
                socialMediaLinks={
                    [{ key: 'instagram', value: 'instagram.com' },
                    { key: 'facebook', value: 'facebook.com' },
                    { key: 'twitter', value: 'twitter.com' }]
                }
                date={"Jan 1, 2020"}
                message={[{
                    key: 'paragraph', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
                              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
                              maiores eligendi! ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
                              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
                              maiores eligendi!`},
                { key: 'header', value: `Let's Start Again` },
                {
                    key: 'paragraph', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
                              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
                              maiores eligendi! `},
                {
                    key: 'quote', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
                              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae `},
                {
                    key: 'paragraph', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
                              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
                              maiores eligendi! `},
                { key: 'image', value: 'Images/blog-1.jpg' },
                { key: 'header', value: `Let's End This` },
                {
                    key: 'paragraph', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
                              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
                              maiores eligendi! `},

                ]}

                comments={[
                    {
                        name: 'John Doe',
                        date: '01 Jan, 2020',
                        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus architecto incidunt adipisci veniam beatae omnis nemo soluta placeat quibusdam iste, velit amet repellat harum dicta laudantium eaque dolores impedit?'
                    },

                    {
                        name: 'Jane Doe',
                        date: '01 Jan, 2020',
                        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus architecto incidunt adipisci veniam beatae omnis nemo soluta placeat quibusdam iste, velit amet repellat harum dicta laudantium eaque dolores impedit?'
                    }
                    ,
                    {
                        name: 'Michael Doe',
                        date: '01 Jan, 2020',
                        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus architecto incidunt adipisci veniam beatae omnis nemo soluta placeat quibusdam iste, velit amet repellat harum dicta laudantium eaque dolores impedit?'
                    }

                ]}
            />
 */









/***
 * 
 * 

    //'http://localhost:5000/api/buildings/building/?page=1&limit=2&category=Hospital'
    const url = new URL('http://localhost:5000/api/buildings')




//  const res = await fetch(`http://localhost:5000/api/posts`)
 // const articles = await res.json()


     const currentURL = window.location.href
    console.log(currentURL)


    /*
  
// Props of above url
hash: "#hash"
host: "site.com:8000"
hostname: "site.com"
href: "http://user:pass@site.com:8000/pa/th?q=val#hash"
password: "pass"
pathname: "/pa/th"
port: "8000"
protocol: "http:"

url.searchParams.get('message'); // => 'hello'
url.searchParams.get('missing'); 

url.searchParams.get('category'); // => 'hello'
url.searchParams.get('limit'); 
console.log(url)

let id  =  url.pathname.split('/').reverse()[0]
console.log(id)

console.log(url.searchParams.get('category')) 
}


let objectParams = {
    category:String,
    tags:Array,
    image:String,
    heading:String,
    author:String,
    authorBio:String,
    socialMediaLinks:Array,
    date:String,
    message:Array,
    comments:Array,
}





let objectBe = {
  category: 'Architecture Design',
  tags: ['3D', 'Movies', 'Animation'],
  image: "Images/blog-1.jpg",
  heading: "Beginner In Architecture",
  author: "John Doe",
  authorBio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus architecto incidunt adipisci veniam beatae omnis nemo soluta placeat quibusdam iste, velit amet repellat harum dicta laudantium eaque dolores impedit?
                `,
  socialMediaLinks:
    [{ key: 'instagram', value: 'instagram.com' },
    { key: 'facebook', value: 'facebook.com' },
    { key: 'twitter', value: 'twitter.com' }]
  ,
  date: "Jan 1, 2020",
  message: [{
    key: 'paragraph', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
              maiores eligendi! ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
              maiores eligendi!`},
  { key: 'header', value: `Let's Start Again` },
  {
    key: 'paragraph', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
              maiores eligendi! `},
  {
    key: 'quote', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae `},
  {
    key: 'paragraph', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
              maiores eligendi! `},
  { key: 'image', value: 'Images/blog-1.jpg' },
  { key: 'header', value: `Let's End This` },
  {
    key: 'paragraph', value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam exercitationem, ullam incidunt minus, 
              nulla dolores atque et nostrum excepturi nobis fugit saepe vitae unde dolore est voluptatibus 
              maiores eligendi! `},

  ],

  comments: [
    {
      name: 'John Doe',
      date: '01 Jan, 2020',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus architecto incidunt adipisci veniam beatae omnis nemo soluta placeat quibusdam iste, velit amet repellat harum dicta laudantium eaque dolores impedit?'
    },

    {
      name: 'Jane Doe',
      date: '01 Jan, 2020',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus architecto incidunt adipisci veniam beatae omnis nemo soluta placeat quibusdam iste, velit amet repellat harum dicta laudantium eaque dolores impedit?'
    }
    ,
    {
      name: 'Michael Doe',
      date: '01 Jan, 2020',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus architecto incidunt adipisci veniam beatae omnis nemo soluta placeat quibusdam iste, velit amet repellat harum dicta laudantium eaque dolores impedit?'
    }

  ]
}


console.log(JSON.stringify(objectBe)) 
 */
