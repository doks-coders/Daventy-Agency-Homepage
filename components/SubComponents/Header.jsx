import React from 'react'
import { Box,Flex, Button, Container, Text,Heading, Input,VStack,HStack } from '@chakra-ui/react'

import Link from 'next/link'

const Header = () => {
    return (
        <header >
        <Flex zIndex="4" background="white" position="fixed" width="100%">

       <Container maxWidth={'container.lg'}>
       <Flex py="5"  alignItems="center" justifyContent={"space-between"}>
              <Flex >
              <Heading fontSize={'xl'} fontWeight={'bold'} color="blue.500">
              DAVENTY 
              </Heading>
              </Flex>
                <Flex  >
                <HStack>
                  <Flex>
                  <HeaderLinks/>
                  </Flex>                
                   <Button background={'blue.500'} color="white" rounded="full">Get Started</Button>
                </HStack>
                </Flex>
                {/**/}
            </Flex>
       </Container>
            
            </Flex>
        </header>
    )
}

export default Header


const HeaderLinks = ()=>{
  //Home About Services Staff Pricing Blog

  let links = [{name:'Home',link:'home'},
  {name:'About',link:'about'},
{name:'Services',link:'services'},
{name:'Staff',link:'staff'},
{name:'Pricing',link:'pricing'},
{name:'Blog',link:'blog'}]
  return(

    <>

    {
      links.map((val,index)=>(
        <Text key={index} mx="5" as={"h5"} size="12">
        <Link href={val.link}>
            <Box color={'black'} align="center">{val.name}</Box>
        </Link>
    </Text>
      ))
    }
 
    </>
  )
}