import React from 'react'
import { Box, Flex, Button, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
const Categories = () => {
  return (
    <>
      <Flex data-aos="fade-up"   mt="50px" >
        <Container maxWidth={'container.lg'}>
          <HStack>
            <Text>FEATURING</Text>
            <Box width="100px" height="2px" background="blue.500" mr="2"></Box>
          </HStack>
          <Heading fontSize={["3xl","3xl","4xl","4xl"]}>OUR WEB SERVICES</Heading>
          <Grid mt="50px" w="100%" templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap="6">
           
<CategoriesElements/>

          </Grid>
        </Container>
      </Flex>
    </>
  )
}

export default Categories


const CategoriesElements = ()=>{
  let categories = [{title:'Portfolio Website',
  image:'Images/portfolio1.png',
  category:'Web Development',
  price:'$1000',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
  handlers:'Tech Team'},

  {title:'Landing Page',
  image:'Images/landingpage.png',
  category:'Marketing',
  price:'$1000',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
  handlers:'Tech Team'},

  {title:'Company Website',
  image:'Images/infographic.png',
  category:'Media',
  price:'$1000',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
  handlers:'Tech Team'},

  {title:'Blogging Website',
  image:'Images/automated.png',
  category:'Marketing',
  price:'$1000',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
  handlers:'Tech Team'},

  {title:'Shopping Website',
  image:'Images/content.png',
  category:'Media',
  price:'$1000',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
  handlers:'Tech Team'},

  {title:'Restaurant Website',
  image:'Images/automated.png',
  category:'Marketing',
  price:'$1000',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
  handlers:'Tech Team'},
  {title:'Transportation Website',
  image:'Images/automated.png',
  category:'Marketing',
  price:'$1000',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
  handlers:'Tech Team'},

]
  return (
    <>
    {
      categories.map((val,index)=>(
        <Flex key={index} border={`1px solid #eef0ef`} flexDirection={'column'} minWidth={'100%'}  >
              <Image src={val.image} h={["200px","200px","250px","250px"]} w="100%" objectFit="cover"></Image>

              <Flex flexDirection={'column'} p="10px" w="100%">
                <HStack my="10px" w="100%" justifyContent="space-between">
                  <Box py="1" fontSize={[11,11,11,11]} px="2" rounded="full" background="blue.300" color="white">
                    {val.category}
                  </Box>
                  <Text fontSize="11">
                    PRO
                  </Text>
                </HStack>
                <Text fontSize={['md','md','lg','xl']}  fontWeight="bold">{val.title}</Text>

                <Text  fontSize={[11,11,14,14]} color="#aaaaaa">{val.text}</Text>

                <Divider my="10px" />
                <HStack justifyContent="space-between">
                  <HStack>
                    <Image objectFit="cover"
                      src="Images/blog-1.jpg"
                      height="40px"
                      width="40px"
                      borderRadius={'full'}></Image>
                    <Text ml="2" fontSize={[11,11,14,14]}>{val.handlers}</Text>
                  </HStack>
                  <Link href="/info">
                  <Button bg="blue.500" size="sm" fontSize="11" color="white" _hover={{}}>
                    
                    Make Enquiry
                   
                    </Button>
                    </Link>
                </HStack>
              </Flex>


            </Flex>
      ))
    }
    </>
  )
}