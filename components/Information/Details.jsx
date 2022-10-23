import React from 'react'

import { Box, Flex, Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack,Stack, Image } from '@chakra-ui/react'

const Details = () => {
    return (
        <>
            <Flex  data-aos="fade-up" mt="40px" w="100%">
                <Container maxW="container.lg">
                    <Flex flexDirection={['column','column','column','row']} >
                        <Flex mt="10" flexBasis="65%" flexDirection={'column'}>
                            <Image maxHeight={'400px'}  objectFit="cover" src="Images/blog-1.jpg" height="100%" w="100%"></Image>

                            <Flex w="100%" flexDirection={'column'}>
                                <Heading mt="5"  fontSize={['sm','sm','xl','2xl']} >Et enim incidunt fuga tempora</Heading>
                                <HStack my="2" spacing={0} w="100%">
                                    <Box h="2px" background="blue.500" w="15%"></Box>
                                    <Box h="2px" background="#f1f1f1f1" w="85%"></Box>
                                </HStack>
                                <Text fontSize={['11','12','sm','sm']}>
                                    Qui et explicabo voluptatem et ab qui vero et voluptas. Sint voluptates temporibus quam autem. Atque nostrum voluptatum laudantium a doloremque enim et ut dicta. Nostrum ducimus est iure minima totam doloribus nisi ullam deserunt. Corporis aut officiis sit nihil est. Labore aut sapiente aperiam. Qui voluptas qui vero ipsum ea voluptatem. Omnis et est. Voluptatem officia voluptatem adipisci et iusto provident doloremque consequatur. Quia et porro est. Et qui corrupti laudantium ipsa. Eum quasi saepe aperiam qui delectus quaerat in. Vitae mollitia ipsa quam. Ipsa aut qui numquam eum iste est dolorum. Rem voluptas ut sit ut.
                                </Text>

                            </Flex>
                        </Flex>
                        <Flex fontSize={['11','12','sm','sm']} mt="10" ml={["0","0","0","5"]} flexDirection="column" w="100%" flexBasis="35%">
<Stack>
<Heading fontSize={['sm','sm','xl','2xl']}>Our Features</Heading>
                                <HStack my="2" spacing={0} w="100%">
                                    <Box h="2px" background="blue.500" w="25%"></Box>
                                    <Box h="2px" background="#f1f1f1f1" w="85%"></Box>
                                </HStack>
</Stack>
                       
                            <HStack my="2" background="gray.50" p="4" w="100%" justifyContent="space-between">
                                <Text>Daventy Website</Text>
                                <Text>Optional</Text>
                            </HStack>
                            <HStack my="2" background="gray.50" p="4" w="100%" justifyContent="space-between">
                                <Text>Instagram Account</Text>
                                <Text>Required</Text>
                            </HStack>
                            <HStack my="2" background="gray.50" p="4" w="100%" justifyContent="space-between">
                                <Text>Twitter Account</Text>
                                <Text>Required</Text>
                            </HStack>

                        </Flex>
                    </Flex>
                </Container>
            </Flex>
        </>
    )
}

export default Details