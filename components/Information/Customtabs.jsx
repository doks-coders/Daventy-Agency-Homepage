
import React from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
const Customtabs = () => {
    let fullScreenStyle = { color: 'blue.500', bg: 'white', borderRight: '2px', borderRightColor: 'blue.500',background:"#f1f1f1" }
    let smallScreenStyle = { color: 'white', bg: 'blue.500' }
   let fullHover= {color: 'blue.500'}
   let smallHover= {color: 'white'}
    return (
        <>
            <Container mt="50px" mb="100px" maxWidth="container.lg">

                <Tabs  mt="10">
                    <Flex w="100%" flexDirection={["column", "column", "row"]}>
                        <Flex flexBasis="20%">
                            <TabList borderBottom={0} w="100%" flexDirection="column" >
                                <Tab py="5"   my="2" _selected={[smallScreenStyle, smallScreenStyle, fullScreenStyle]} >Lesson 1</Tab>
                                <Tab py="5"  my="2" _selected={[smallScreenStyle, smallScreenStyle, fullScreenStyle]} >Lesson 2</Tab>
                                <Tab py="5"   my="2" _selected={[smallScreenStyle, smallScreenStyle, fullScreenStyle]} >Lesson 3</Tab>
                            </TabList>
                        </Flex>

                        <Flex flexBasis="100%" >
                            <TabPanels>
                                <TabPanel>
                                    <CustomInformation
                                        image={"Images/blog-1.jpg"}
                                        heading={'Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore'}
                                        quote={'libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore'}
                                        information={'Eaque consequuntur cibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore'}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <CustomInformation
                                        image={"Images/socialmedia.png"}
                                        heading={'Accusamus laboriosam dolore Fuga dolores inventore laboriosam ut est'}
                                        quote={'Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore'}
                                        information={'Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore'}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <CustomInformation
                                        image={"Images/infographic.png"}
                                        heading={'Aboriosam ut est accusamus laboriosam Fuga dolores inventore l dolore'}
                                        quote={'Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitiEligendi asperiores sed qui veritatis aperiam quia a laborum inventore'}
                                        information={'untur c Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur a laborum inventore'}
                                    />
                                </TabPanel>
                            </TabPanels>
                        </Flex>

                    </Flex>





                </Tabs>


            </Container>

        </>
    )
}

export default Customtabs



let CustomInformation = ({ heading, quote, information, image }) => {
    return (

        <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} >
            <Flex mr="5" flexBasis="70%" flexDirection="column">
                <Heading mb="2" fontSize={'2xl'} fontWeight="normal">{heading}</Heading>

                <Text color="#777777" my="2"> <i>{quote}</i> </Text>

                <Text color="#777777" my="2">{information}</Text>

            </Flex>

            <Flex height="200px" flexBasis="30%">
                <Image objectFit="cover" src={image} />
            </Flex>
        </Flex>

    )
}