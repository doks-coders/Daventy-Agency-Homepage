import React from 'react'
import { useState } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image,Grid } from '@chakra-ui/react'
import OverLayElement from './OverLayElement'
const Portfolio = ({inputRef}) => {
  return (
    <>

<Container data-aos="fade-up"  maxW="container.lg" mt="10">

   

<Grid mt="5" w="100%" templateColumns={[
       "repeat(1,1fr)",
       "repeat(1,1fr)",
       "repeat(2,1fr)",
       "repeat(3,1fr)",
                          
                              ]} gap="4">
                        <Box w="100%" className="layoutFade" h="300px" position="relative" >
                            <Image h="inherit" w="inherit" objectFit="cover" src="Images/automated.png"></Image>
                            <Box w="100%"  className="fadeElement">
                            <OverLayElement title={'Shopping Website'}/>
                            </Box>
                        </Box>

                        <Box w="100%" className="layoutFade" h="300px" position="relative" >
                            <Image h="inherit" w="inherit" objectFit="cover" src="Images/infographic.png"></Image>
                            <Box w="100%"  className="fadeElement">
                            <OverLayElement title={'Booking Website'}/>
                            </Box>
                        </Box>

                        <Box w="100%" className="layoutFade" h="300px" position="relative" >
                            <Image h="inherit" w="inherit" objectFit="cover" src="Images/seo.png"></Image>
                            <Box w="100%"  className="fadeElement">
                            <OverLayElement title={'Company Website'}/>
                            </Box>
                        </Box>

                        <Box w="100%" className="layoutFade" h="300px" position="relative" >
                            <Image h="inherit" w="inherit" objectFit="cover" src="Images/socialmedia.png"></Image>
                            <Box w="100%"  className="fadeElement">
                            <OverLayElement title={'Portfolio Website'}/>
                            </Box>
                            </Box>
                            
    
                              </Grid>

    </Container>
    </>
    
  )
}

export default Portfolio