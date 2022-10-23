import React from 'react'
import { Box, Flex, Button, Container, Text, Heading, Input, VStack, HStack } from '@chakra-ui/react'
import SimpleDrawer from '../Drawer/SimpleDrawer'
import Link from 'next/link'

const Header = (props) => {
  return (
    <header >
      <Flex {...props} zIndex="4" background="white" position="fixed" width="100%">

        <Container maxWidth={'container.lg'}>
          <Flex py="5" alignItems="center" justifyContent={"space-between"}>
            <Flex >
              <Link href="/">
                <Heading cursor={'pointer'} fontSize={['md','xl','xl','xl']} fontWeight={'bold'} color="blue.500">
                  DAVENTY
                </Heading>
              </Link>

            </Flex>

            <HStack display={{ base: 'none' ,sm: 'none', md: 'flex'}}  >


              <Flex >
                <HeaderLinks />
              </Flex>


              <Button fontSize="14" background={'blue.500'} color="white" rounded="full">Get Started</Button>
            
            </HStack>

            <Flex display={{ sm: 'flex', md: 'none', base: 'flex' }}  alignItems="center">

            <Button fontSize="11" background={'blue.500'} color="white" rounded="full">Get Started</Button>
            <SimpleDrawer btnColor={'black'} />
            
            </Flex>

            {/**/}
          </Flex>
        </Container>

      </Flex>
    </header>
  )
}

export default Header


const HeaderLinks = () => {
  //Home About Services Staff Pricing Blog

  let links = [{ name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Staff', link: '/staff' },
  { name: 'Blog', link: '/blog' }]
  return (

    <>

      {
        links.map((val, index) => (
          <Text key={index} mx="5" as={"h5"} fontSize="14">
            <Link href={val.link}>
              <Box cursor={'pointer'} _hover={{ color: 'blue.500' }}  align="center">{val.name}</Box>
            </Link>
          </Text>
        ))
      }

    </>
  )
}