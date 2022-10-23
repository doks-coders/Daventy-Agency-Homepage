import React from 'react'

import {useContext,useState} from 'react'
import { GlobalContext } from '../../Context/GlobalContext';

import MessageModal from '../Modal/MessageModal';

import {
    Box, Flex, Image, Heading, Divider, Text, Textarea, Button,

    Input, InputGroup, InputLeftAddon, InputRightAddon,Link
} from '@chakra-ui/react'




let ContentElement = ({idEntered, image, heading, author, date,message,comments,authorBio,category,tags,socialMediaLinks,authorImage }) => { 
  
    const submitComment = async (post,id)=>{
        try {
          setBool(true)
          setmodalMessage('Loading...')
          const res = await fetch(`http://localhost:5000/api/comments/${id}`,{method:'POST',headers:{'Content-type':'application/json'},body:JSON.stringify(post)})
          const data = await res.json()
          setmodalMessage('Comment Sent Successfully')
        } catch (error) {
          setmodalMessage('There was an error, Please Try Again')
        }
     
      
      }
  




    const [commentName,setCommentName] = useState('')
    const [commentEmail,setCommentEmail] = useState('')
    const [commentMessage,setCommentMessage] = useState('')

    const [bool,setBool] = useState(false)
    const [modalMessage, setmodalMessage] = useState('Loading...')

 
    const submitFormData = (e)=>{
     
        e.preventDefault()
 let post =  {
    date:'1st of June',
    name:commentName,
    email:commentEmail,
    comment:commentMessage
 }
        submitComment(post,idEntered)
  
    
    }



    
    
    


    return (
        <>
            <Flex w={{ base: "100%", sm: "100%", md: "90%" }} my="4" boxShadow='0 4px 16px rgb(0 0 0 / 10%)' flexDir="column" >
                {/*Image of Post Section*/}
                <Flex w="100%" >
                    <Image height={{ base: '200px', sm: '200px', md: "400px" }} w="100%" objectFit={'cover'} src={image}></Image>
                </Flex>
                <Flex bg="white" justifyContent="center" >
                    <Flex w="95%" flexDirection={'column'} >
                        {/*Heading of Post Section*/}
                        <Heading
                            py={{ base: '10px', sm: '7px', md: "5px" }}
                            fontSize={{ base: 'xl', sm: 'xl', md: "3xl" }}
                        >
                            {heading}
                        </Heading>
                        {/*Details of Post Section*/}
                        <Flex fontSize="sm" flexWrap="wrap" height="40px" >
                            <Flex mr="2" alignItems="center" >

                                <Box mx="2"><i className="pi pi-user"></i></Box>
                                {author}
                            </Flex>
                            <Flex alignItems="center" mr="2" >
                                <Box mx="2"><i className="pi pi-calendar"></i></Box>
                                {date}
                            </Flex>
                            <Flex alignItems="center" mr="2" >
                                <Box mx="2"><i className="pi pi-comments" ></i></Box>
                                {comments && comments.length} Comments
                            </Flex>

                        </Flex>
                        {/*Content Section*/}
                        <Flex w="100%" flexDirection={'column'} minHeight="100px" py="15px">
                            <ContentMessage message={message} />
                            <Divider mb="10px" />
                            <Flex alignItems="center">
                                <Flex >
                                    <Box mr="2"><i className="pi pi-folder"></i></Box>
                                    <Text>{category}</Text> 
                                </Flex>
                                <Flex ml="4">
                                    <Box mr="2"><i className="pi pi-tags"></i></Box>
                                    <Text>{tags && tags.join(', ')}</Text>

                                </Flex>
                            </Flex>
                        </Flex>
                        {/*Button Section*/}


                    </Flex>


                </Flex>




                <Flex bg="blue"></Flex>
            </Flex>
            {/*Author Section*/}
            <Flex boxShadow='0 4px 16px rgb(0 0 0 / 10%)' p="7px" w={{ base: "100%", sm: "100%", md: "90%" }} bg="white" mt="10px" flexDirection={{ base: 'column', sm: 'column', md: 'row' }} minH="150px" >
                <Flex py="2" justifyContent="center" alignItems="center" flexBasis="20%" >
                    <Image objectFit="cover" rounded={'50%'} w={{ base: "70px", sm: "70px", md: "100px" }} h={{ base: "70px", sm: "70px", md: "100px" }} src={authorImage}></Image>
                </Flex>
                <Flex justifyContent={["center", "center", "normal"]} flexBasis="80%" >
                    <Flex py="2" flexDirection={'column'} alignItems={["center", "center", "normal"]} minW="70%" px={'10px'}  >
                        <Heading fontSize="2xl">{author}</Heading>
                        <Flex>
                            
                       <SocialLinks socialMediaLinks={socialMediaLinks} />
                            
                       
                        </Flex>
                        <Text mt="10px">

                        {authorBio}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            {/*Comment Section*/}
            <Flex p="2" bg="white" w={{ base: "100%", sm: "100%", md: "90%" }} flexDirection="column" mt="20px"  >
                <Heading px="3%" py="2" fontSize="2xl"> {comments && comments.length} Comments</Heading>
                <Divider />
                <Flex flexDirection="column">
                   {comments && <CommentElement comments={comments} />}
                </Flex>
            </Flex>

           

            <Flex p="2" bg="white" w={{ base: "100%", sm: "100%", md: "90%" }} minH="100px" flexDirection="column" mt="20px"  >
                <Heading px="3%" py="2" fontSize="2xl"> Leave a reply</Heading>
                <Text px="3%">Your email address will not be published</Text>
                <form   onSubmit={submitFormData}>
                <Flex flexDirection="column" w="100%" px="3%">
                    <Flex justifyContent={'space-between'} flexDirection={['column', 'row', 'row']} w="100%">
                        <Input     onChange={(e)=>{setCommentName(e.target.value)}}  placeholder="Your Name" my="2" w={['100%', '49%', '49%']}></Input>
                        <Input onChange={(e)=>{setCommentEmail(e.target.value)}} placeholder="Your Email" my="2" w={['100%', '49%', '49%']}></Input>
                    </Flex>
                    <Textarea  onChange={(e)=>{setCommentMessage(e.target.value)}} placeholder="Your Comment" my="2"></Textarea>

                    <Button type="submit" background="black" color="white" _hover={{ background: 'black', color: 'white' }}>Send Reply</Button>
                </Flex>
                </form>

                {
  bool && <MessageModal bool={bool} setBool={setBool} message={modalMessage} />
}
      
            </Flex>
          
        </>
    )
}

export default ContentElement


let SocialLinks = ({socialMediaLinks})=>{
    return (
        <>{
            socialMediaLinks.map((val,index)=>(
                <Box key={index}>
                        {socialMediaLinksCollection(val.key, val.value)}
                    </Box>
            ))
        }
        </>
    )
}


let ContentMessage = ({message}) => {
    
    return (
        <>
            {
                message.map((val, index) => (
                    <Box key={index}>
                        {setElement(val.key, val.value)}
                    </Box>
                ))
            }
        </>
    )
}


let setElement = (key, value) => {
    let element = ''
    switch (key) {
        case 'paragraph':
            element = (
                <><Text my="2" as="div" fontSize={{ base: 'sm', sm: 'sm', md: 'md' }} >{value}</Text>
                </>);
            break;
        case 'quote':
            element = (<>
                <Box my="2" fontSize={'lg'} borderLeftWidth={4} p="4" borderColor="black" fontStyle={'italic'} background="#fafafa" >{value} </Box>
            </>);
            break;
        case 'header':
            element = (<><Heading fontSize={{ base: 'lg', sm: 'lg', md: 'xl' }} mt="4" mb="1">{value}</Heading></>);
            break;
        case 'image':
            element = (<><Image my='6' height={{ base: '200px', sm: '200px', md: "400px" }} w="100%" objectFit={'cover'} src={value}></Image></>);

            break;
    }

    return element
}



let socialMediaLinksCollection = (key,value)=>{

    let openLink = (link)=>{
        window.open(link, "_blank")
    }

    let element = ''
    switch (key) {
        case 'instagram':
            element = (<Box onClick={()=>openLink(value)}><Box mx="2"><i className="pi pi-instagram"></i></Box></Box>);
            break;
        case 'facebook':
            element = (<Box onClick={()=>openLink(value)}><Box mx="2"><i className="pi pi-facebook"></i></Box></Box>);
            break;
        case 'twitter':
            element = (<Box onClick={()=>openLink(value)}><Box mx="2"><i className="pi pi-twitter"></i></Box></Box>);
            break;
    }

    return element
}

let CommentElement = ({comments}) => {
   
    return (
        <>
            {
                comments.map((val, index) => (
                    <Box as="div" key={index}>
                        <Flex  p="7px" w="100%" mt="10px" flexDirection={{ base: 'column', sm: 'column', md: 'row' }} minH="150px" >
                            <Flex justifyContent="center" alignItems="center" flexBasis="15%" >
                                <Image objectFit="cover" w={{ base: "50px", sm: "50px", md: "80px" }} h={{ base: "50px", sm: "50px", md: "80px" }} src="../Images/person.png"></Image>
                            </Flex>
                            <Flex justifyContent={["center", "center", "normal"]} flexBasis="85%" >
                                <Flex flexDirection={'column'} alignItems={["center", "center", "normal"]} minW="70%" px={'10px'} py="10px" >
                                    <Heading fontSize="lg">{val.name}</Heading>
                                    <Flex fontSize="sm">
                                        {val.date}
                                    </Flex>
                                    <Text fontSize="sm" mt="10px">
                                        {val.comment}</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Divider />
                    </Box>
                ))
            }

        </>
    )
}