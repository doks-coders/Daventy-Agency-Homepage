import React from 'react'
import {useEffect} from 'react'
import { Box, Flex, Button, Container, Text, Heading,Grid, Image, Input, VStack, HStack } from '@chakra-ui/react'
import Link from 'next/link'



//useEffect


const Why = () => {

 
    //example 
 


    return (
        <>
            <Flex mt="40px">
                <Container maxWidth="container.lg">
                    <Flex width="100%"    data-aos="fade-up" flexDirection={["column", "column", "column","row"]} >
                        <Flex mt="10" p="8" justifyContent="center"  color="white"  background="blue.300" flexDirection={'column'} alignItems="center" flexBasis="30%">
                            <Heading my="2" textAlign="center" fontSize="2xl">Why Choose Daventy?
                            </Heading>
                            <Text textAlign="center" fontSize={['11','12','14','14']} my="2">
                                A vast majority of businesses find it difficult to maintain their online status. This leads to delay in relaying 
                                of information and loss of customer enthusiasm. In order to solve this problem, a team is required. Here at Daventy,
                                we are entirely tailored to your needs. Using trained experts, we are ready to work endlessly to give you the best online brand possible
                            </Text>
                            <Link href="/about">
                            <Button _hover={{ color: 'black' }} mt="10px" rounded="full" background="blue.500" color="white">
                                
                                Learn More
                                <Box as="span" ml="2">
                                    <i className="pi pi-angle-right"></i>
                                </Box>

                            </Button>
                            </Link>
                         
                        </Flex>

                        <Flex mt="10" flexBasis="70%">
                        <Grid  w="100%" templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap="2">
                        <WhyElement/>
                        </Grid>
                            
                        </Flex>
                    </Flex>
                </Container>
            </Flex>

        </>
    )
}

export default Why

const OutLineCircle = ({ icon }) => {
    return (
        <>
            <Flex color="blue.500" background="blue.50" justifyContent="center" alignItems={'center'}
                borderRadius={'full'} width="60px"
                height="60px" >
                <i style={{ fontSize: '30px' }} className={`pi pi-${icon}`}></i>
            </Flex>
        </>
    )

}

const WhyElement = ({})=>{
    let Elements = [{name:'Save Time',reason:`Great website content informs, entertains and inspires. It builds online presence by cultivating credibility and trust while empathizing with your target audience.
    `,icon:'home'},
{name:'Focus on your work',reason:'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',icon:'check'},
{name:'Leave it to professionals',reason:'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',icon:'clock'},]
    return(
        <>
        {
            Elements.map((item,index)=>(
                <Flex minHeight="400px" ml={["0","0","2"]} key={index} border={`1px solid #eef0ef`} flexBasis="33%" >
                <Flex flexDirection="column" p="8px" justifyContent={'center'} alignItems={'center'} w="100%">
                    <Box>
                        <OutLineCircle icon={item.icon} />
                    </Box>
                    <Heading h="10" my="5" textAlign="center" color="#444444" fontSize={['md','md','lg','lg']}>
                        {item.name}
                    </Heading>
                    <Text h="150"  textAlign="center" fontSize={['12','12','sm','sm']} color="#848484">
                        {item.reason}
                    </Text>
                </Flex>
            </Flex>

            ))
        }
        </>
      
    )
}
