import React from 'react'
import { Flex, Box, Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
const PricingVariant = () => {
    return (
        <>
         

               

                    <Container   mb="100px" mt="100px" maxW="container.lg">
                        <Grid h="100%" w="100%" templateColumns={["repeat(1,1fr)", "repeat(1,1fr)","repeat(2,1fr)", "repeat(3,1fr)"]} gap="6">
<PricingElements/>
                        </Grid>
                    </Container>

             

          
        </>
    )
}

export default PricingVariant



let PricingElements= ()=>{

    let pricingObjects = [{
type:'Personal',
advanced:false,
price:'1000',
interval:'month',
items:[{
    title:'New Website',
    mode:true,
},
{
    title:'400 Words',
    mode:true,
},
{
    title:'Monthly',
    mode:true,
},
{
    title:'SEO Optimised',
    mode:false,
},
{
    title:'Editable',
    mode:false,
},
]
    },

    {
        type:'SME',
        advanced:false,
        price:'2000',
        interval:'year',
        items:[{
            title:'New Website',
            mode:true,
        },
        {
            title:'400 Words',
            mode:true,
        },
        {
            title:'Monthly',
            mode:true,
        },
        {
            title:'SEO Optimised',
            mode:true,
        },
        {
            title:'Editable',
            mode:false,
        },
        ]
            },


            {
                type:'Company',
                advanced:true,
                price:'5000',
                interval:'month',
                items:[{
                    title:'New Website',
                    mode:true,
                },
                {
                    title:'400 Words',
                    mode:true,
                },
                {
                    title:'Monthly',
                    mode:true,
                },
                {
                    title:'SEO Optimised',
                    mode:true,
                },
                {
                    title:'Editable',
                    mode:true,
                },
                ]
                    },

]
    return (
        <>
        {
            pricingObjects.map((val,index)=>(
                <Flex data-aos="fade-up" key={index} border={`1px solid #eef0ef`} flexDirection="column" w="100%"   >
        <Flex fontWeight="bold" position="relative" color="blackAlpha.700" justifyContent={'center'} alignItems="center" bg="#f1f1f1f1" py="15px">
            {val.type}
            {
                val.advanced && <Flex right={0} position="absolute"  justifyContent="flex-end">
                <Box px="4" bg="blue.500"  transform={'rotate(45deg)'} color="white">ADVANCED</Box> 
                </Flex>
            }
            
        </Flex>

        <VStack spacing={5} py="10">
            

               {
                val.items.map((val,index)=>(
                    <Text key={index} color={val.mode ?"black": "blackAlpha.700"}  textDecoration={ val.mode? "normal":"line-through"} fontSize="sm">{val.title}</Text>
                ))
               }
        </VStack>

        <Flex justifyContent={'center'} alignItems="center" bg="#f1f1f1f1" py="15px">
            <Button bg="blue.500" color="white" rounded="full">Send Quote</Button>
        </Flex>

    </Flex>
            ))
        }
        </>
        
      
    )
}