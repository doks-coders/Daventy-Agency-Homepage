import React from 'react'
import { Box, Flex, Button, Grid, Container, Text, Heading, Image, Input, VStack, HStack } from '@chakra-ui/react'

import CarouselDemo from '../PrimeComponents/CarouselDemo'
const Testimonials = () => {
    const information = [
        {
comment:'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.',
image:'Images/blog-1.jpg',   
occupation:'Entrepreneur',
name:'Sarah Line'},
{
    comment:'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.',
    image:'Images/blog-1.jpg',   
    occupation:'Entrepreneur',
    name:'Sarah Line'},
    {
        comment:'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.',
        image:'Images/blog-1.jpg',   
        occupation:'Entrepreneur',
        name:'Sarah Line'},


          {
        comment:'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.',
        image:'Images/blog-1.jpg',   
        occupation:'Entrepreneur',
        name:'Sarah Line'},

        {
            comment:'Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.',
            image:'Images/blog-1.jpg',   
            occupation:'Entrepreneur',
            name:'Jacob Line'},

]
    return (
        <>
            <Flex data-aos="fade-up"  mt="50px" >
                <Container maxWidth={'container.lg'}>
                    <HStack>
                        <Text fontSize={["sm","sm","sm","xl"]}>TESTIMONIALS</Text>
                        <Box width="100px" bg="blue.500" height="2px"  mr="2"></Box>
                    </HStack>
                    <Heading fontSize={["xl","xl","xl","4xl"]}>WHAT ARE THEY SAYING</Heading>
               
<Box mt="10">
<CarouselDemo information={information} />
</Box>





                </Container>
            </Flex>
        </>
    )
}

export default Testimonials