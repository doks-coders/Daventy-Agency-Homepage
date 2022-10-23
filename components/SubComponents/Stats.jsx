import React from 'react'
import { Box, Flex, Button, Container, Text, Heading, Image, Input, VStack, HStack } from '@chakra-ui/react'
const Stats = () => {
  return (
  <>
 <Flex data-aos="fade-up"  mt="50px" width="100%"  background="gray.50">
<Container maxWidth="container.lg">
<Flex height="100%" width="100%" flexDirection={['column','column','row']} flexWrap={'wrap'}>
<FlexItems/>
</Flex>
</Container>
 </Flex>
  </>
  )
}

export default Stats


let FlexItems = ()=>{

  let Items= [{name:'Websites',count:'20+'},
{name:'Content Posts',count:'200+'},
{name:'Infographics',count:'50+'},
{name:'Whiteboard Videos',count:'100+'},]
 let constant = (1/Items.length) *100
let fullscreen = (constant)+'%'
let midscreen = (constant + constant)+'%'


  return (
    <>
    {
      Items.map((val,index)=>(
        
         <Flex py={["3","3","10","10"]} key={index} alignItems={'center'} 
   justifyContent="center" 
   flexBasis={[midscreen,midscreen,fullscreen]} 
   height="100%" 
   >
  <Flex alignItems={'center'} flexDirection="column">
<Heading fontSize={['xl','xl','2xl','3xl']} color="blue.500">{val.count}</Heading>
<Text fontWeight="semibold" fontSize={['11','12','12']}>{val.name}</Text>

  </Flex>

  </Flex>
      
      ))
    }
    
  

    </>
  )
}