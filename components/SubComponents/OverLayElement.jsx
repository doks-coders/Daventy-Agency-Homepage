import React from 'react'
import { useState } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image,Grid } from '@chakra-ui/react'
const OverLayElement = ({title}) => {
  return (
    <>
   
    <Box p="3" w="inherit"  h="inherit" opacity="0.8" top="0" bg="white"  position="absolute">
    <Flex zIndex="5px" w="100%" h="100%" justifyContent={'space-between'} flexDirection="column">
<Flex justifyContent={'start'} h="20px">
<Box h="100%" w="20px"  
 borderTopWidth="3px"
 borderLeftWidth={"3px"} 
 borderTopColor={'grey'} 
 borderLeftColor="grey"/>
</Flex>
<Flex zIndex="3px" justifyContent={'center'} h="25%">
<VStack>
  <Text fontSize="lg" fontWeight="bold">{title}</Text>
  <Text>WEB</Text>
  <Flex  >
    <Box mx="1"  fontSize="xl" _hover={{color:'blue.500'}} cursor="pointer" className="pi pi-link"></Box>
    <Box mx="1"  fontSize="xl" _hover={{color:'blue.500'}} cursor="pointer" className="pi pi-github"></Box>
  </Flex>
</VStack>
</Flex>
<Flex justifyContent={'flex-end'} h="20px">
<Box h="100%" w="20px"  
 
borderBottomWidth={"3px"} 
borderRightWidth="3px" 
borderBottomColor={'grey'} 
borderRightColor="grey"/>
</Flex>
                              </Flex>
                               </Box>
                               </>
  )
}

export default OverLayElement