import React from 'react'
import { Box, Flex, Button, Container, Text, Heading } from '@chakra-ui/react'
import Parallax from './subcomponents/Parallax'

const Banner = () => {


  return (
    <>
      <Flex   pt="70px">
        <Parallax src={'Images/home.jpg'} opacity={'0.5'} height={['100vh', '100vh', '550px']} width="100%">
          <Container maxWidth={'container.lg'}>
            <Flex height="100%" alignItems={'center'}>
              <Flex data-aos="fade-right" zIndex={'2'} color="white" flexDirection={'column'}>
                <TextEl  spacing="10px" headerSize={["3xl","3xl","4xl","5xl"]} smallTextSize={['sm','lg','lg','lg']} />
              </Flex>
            </Flex>
          </Container>
          </Parallax>
      
      </Flex>
    </>
  )
}

export default Banner

const TextEl = ({ spacing,headerSize,smallTextSize }) => {
  return (
    <>
      <Heading fontSize={headerSize} my={spacing}>
        Increase Your Online Presence,
      </Heading>
      <Heading  fontSize={headerSize} my={spacing}>
        Stay Consistent
      </Heading>
      <Text  maxW={["400px","400px","500px","500px"]}  my={spacing} fontSize={smallTextSize} >
        We are team of talented experts dedicated to improve your online brand
      </Text>
      <Box my={spacing}>
        <Button _hover={{color:'black',background:'white'}} variant="outline" rounded="full"> Get Started</Button>
      </Box></>
  )
}

/**
 * textShadow={'2px 2px 4px #000000 '}
textShadow={'2px 2px 4px #000000 '}
textShadow={'2px 2px 4px #000000 '}
 */