import React from 'react'
import {useContext} from 'react'



import { Box, Flex, Image, Heading, Button,  Text, } from '@chakra-ui/react'

import Link from 'next/link'


import { GlobalContext } from '../../Context/GlobalContext';






let PostElement = ({ image, heading, name, date, comments, preview,indexEL }) => {

   


    return (
        <>
            <Flex  w={{base:"100%",sm:"100%",md:"90%"}} my="4" boxShadow='0 4px 16px rgb(0 0 0 / 10%)' flexDir="column" >
                {/*Image of Post Section*/}
                <Flex w="100%" >
                    <Image height={{base:'200px',sm:'200px',md:"400px"}} w="100%" objectFit={'cover'} src={image}></Image>
                </Flex>
                <Flex bg="white" justifyContent="center" >
                    <Flex w="95%" flexDirection={'column'} >
                        {/*Heading of Post Section*/}
                        <Heading
                        as="div"
                        cursor={'pointer'}
                       
                            py={{ base: '10px', sm: '7px', md: "5px" }}
                            fontSize={{ base: 'xl', sm: 'xl', md: "3xl" }}
                            _hover={{
                                ease: 2,
                                color: 'blue.500',
                            }}
                        >
                            <Box  >

                            <Link href={`/blog/${indexEL}`} >
                           <Box as="h3">
                           {heading}
                           </Box>
                            </Link>

                         
                            </Box>
                           
                        </Heading>
                        {/*Details of Post Section*/}
                        <Flex fontSize="sm" flexWrap="wrap" height="40px" >
                            <Flex mr="2" alignItems="center" >

                                <Box mx="2"><i className="pi pi-user"></i></Box>
                                {name}
                            </Flex>
                            <Flex alignItems="center" mr="2" >
                                <Box mx="2"><i className="pi pi-calendar"></i></Box>
                                {date}
                            </Flex>
                            <Flex alignItems="center" mr="2" >
                                <Box mx="2"><i className="pi pi-comments" ></i></Box>
                                {comments} Comments
                            </Flex>

                        </Flex>
                        {/*Preview Content Section*/}
                        <Flex w="100%" minHeight="100px" py="15px">
                            <Text as="p" noOfLines={3}>{preview} </Text>
                        </Flex>
                        {/*Button Section*/}
                        <Flex py="3"  justifyContent="flex-end" >
                        
                            <Link href={`/blog/${indexEL}`} >
                            <Button bg="blue.500" color="white" _hover={{}}>
                                    Read More
                           </Button>
                            </Link>
                                
                               
                            
                           
                        </Flex>
                    </Flex>
                </Flex>
                <Flex bg="blue"></Flex>
            </Flex>
        </>
    )
}

export default PostElement
