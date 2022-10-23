import React from 'react'
import { Box, Flex,Image } from '@chakra-ui/react'
const Parallax = ({children,src,opacity,height,width}) => {
  return (
    <>
     <Flex opacity="1"  backgroundImage={src}  
         backgroundAttachment="fixed" 
        backgroundPosition={'center'} 
        backgroundRepeat="no-repeat"
        backgroundSize={'cover'}
        position={'relative'}
        height={height} width={width}>
          <Image zIndex="-1" src={src} width="100%" position={'fixed'} top="0"    height="100%" objectFit="cover"/>
          <Box position={'absolute'}  background="linear-gradient(-90deg, grey,black)" top="0"  opacity={opacity} width="100%" height="100%">
          </Box>      
{children}
        </Flex>

    </>
  )
}

export default Parallax