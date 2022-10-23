import React from 'react'

import { Box,Flex, Button,Image, Container,Grid, Text,Heading, Input,VStack,HStack } from '@chakra-ui/react'

const Staff = () => {
  return (
  <>
   <Flex data-aos="fade-up"  mt="50px" >
        <Container maxWidth={'container.lg'}>
          <Grid mt="50px" w="100%" templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap="6">
<StaffElements/>
          </Grid>
        </Container>
      </Flex></>
  )
}

export default Staff


const StaffElements = ()=>{
  let staff = [{
    name:'Odokuma Ogheneguono',
  image:'Staff/web.jpg',
  category:'Web Development',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
instagram:'',
twitter:'',
facebook:''},

{
  name:'Walter White',
  image:'Images/blog-1.jpg',
  category:'Web Development',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
instagram:'',
twitter:'',
facebook:''},

{
  name:'Walter White',
  image:'Images/blog-1.jpg',
  category:'Web Development',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
instagram:'',
twitter:'',
facebook:''},

{
  name:'Walter White',
  image:'Images/blog-1.jpg',
  category:'Web Development',
  text:'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',
instagram:'',
twitter:'',
facebook:'',
linkedin:''},

]





  return (
    <>
    {
      staff.map((val,index)=>(
        <Flex  key={index} border={`1px solid #eef0ef`} flexDirection={'column'} minWidth={'100%'}  >
              <Image src={val.image} h={["250px","200","250","250"]} w="100%" objectFit="cover"></Image>

              <Flex alignItems="center" flexDirection={'column'} p="20px" w="100%">
              <Text textAlign="center" fontSize={['md','md','lg','xl']}  fontWeight="bold"> {val.name}</Text>
              
                <Text textAlign="center" fontSize={[11,11,14,14]} as="div"> <i>{val.category}</i> </Text>

                <Text my="2" fontSize={[11,11,14,14]}as="div" textAlign="center" color="#aaaaaa" >
                 <i>{val.text}</i> </Text>

                 <HStack mt="3">
                 <i className='pi pi-linkedin'></i>
                   <i className='pi pi-instagram'></i>
                 <i className='pi pi-facebook'></i>
                 <i className='pi pi-twitter'></i>
                 
                 </HStack>

              
              </Flex>


            </Flex>
      ))
    }
    </>
  )
}
