import React from 'react'
import { Box, Flex, Button, Container, Text, Heading, Image,Stack, Input, VStack, HStack } from '@chakra-ui/react'
const About = () => {
  return (
    <>
      <Container data-aos="fade-up"  mt="40px" maxWidth="container.lg">
        <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} width="100%">

          <Flex  mt="10" height="100%" flexDirection="column"  flexBasis={'50%'}>
            <Heading fontSize={["xl","xl","xl","3xl"]} as="h5">
              Being online has never been so easy.
            </Heading>
            <Text fontSize={['11','12','md','md']} my="3" as="div">
              <i> Using different technologies at our disposal, our team will help your business:
              </i>
            </Text>
            <Stack  fontSize={['11','12','md','md']}>
              <HStack >
                <OutLineCircle/>
                <Box as="p">
                  Target the right customers </Box>
              </HStack>
              <HStack >
                <OutLineCircle/> 
                <Box as="p">
                   Constantly enrich your content </Box>
              </HStack>
              <HStack >
                <OutLineCircle/>
                 <Box as="p">
                  Deliver optimum digital experience to your customers </Box>
              </HStack>
            </Stack>



            <Text fontSize={['11','12','md','md']} my="3">
           Daventy creates relevant content that starts conversations with prospects. We nurture those discussions into relationships and, eventually, sales, by sharing great stories about your business told through the right 
type of content, delivered at the right time on the right channels.

               </Text>
          </Flex>
          <Flex mt="10" height={['250px', '250px','300px', '400px']}  flexBasis={'50%'} >
            <Image borderRadius="10px" src="Images/blog-1.jpg" objectFit="cover" width="100%" height="100%"></Image>
          </Flex>



        </Flex>
      </Container>

    </>
  )
}

export default About


const OutLineCircle = () => {
  return (
    <>
      <Flex color="blue.500" justifyContent="center" alignItems={'center'}
        borderRadius={'full'} width="20px"
        height="20px" border={'2px'}>
           <i style={{fontSize:'10px'}}   className="pi pi-check"></i>
      </Flex>
    </>
  )

}