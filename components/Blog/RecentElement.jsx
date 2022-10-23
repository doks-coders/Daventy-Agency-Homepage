import React from 'react'

import { Box, Flex, Image, Heading} from '@chakra-ui/react'
import Link from 'next/link'


let RecentElement = ({heading,date,image,idEntered})=>{
    return (
        <>
            <Flex  my="1" height={{base:'60px',sm:'60px',md:'80px'}} >
                <Flex flexBasis="20%">
                    <Image height="100%" w="100%" objectFit={'cover'} src={image}></Image>
                </Flex>
                <Flex px="4" flexDir="column" justifyContent={'space-evenly'} flexBasis="80%">
                    <Heading  cursor={'pointer'} noOfLines={1} fontSize={'md'} _hover={{ ease: 2, color: 'red', }} >
                        <Link href={`/blog/${idEntered}`} >
                            <Box>
                            {heading}
                            </Box>
                            </Link>
                    </Heading>
                    <Flex alignItems="center" mr="2" >
                        <Box mx="2"><i className="pi pi-calendar"></i></Box>{date}</Flex>
                </Flex>
            </Flex>

        </>
    )
}

export default RecentElement