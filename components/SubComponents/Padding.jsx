import React from 'react'
import { Box, Flex, Button, Container, Text, Heading, Image, Input, VStack, HStack } from '@chakra-ui/react'

const Padding = ({name,text}) => {
  return (
    <>
<Box pt="20">
    <Flex justifyContent={'center'} alignItems="center" bg="blue.500" py="30px" flexDirection={'column'}>
        <Heading fontSize={['sm','sm','lg','xl']}  color="white">{name}</Heading>
        <Container maxW="container.lg">
        <Text mt="3" fontSize={['11','11','13','sm']} color="white" textAlign="center">
{text}
        </Text>
        </Container>
       
    </Flex>
    </Box>    
    </>
  )
}

export default Padding