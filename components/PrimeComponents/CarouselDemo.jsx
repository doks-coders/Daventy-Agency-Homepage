import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';

import { Box, Flex, Grid, Container, Text, Heading, Image, Input, VStack, HStack } from '@chakra-ui/react'

const CarouselDemo = ({information}) => {

  
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '600px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const Testimony = (information)=>{
        return(
            <>
             <Flex  position="relative">
                        <Flex right="-1" display={['none','none','flex']} position="absolute" top="0" border={`1px solid #eef0ef`}  height="100%" width={'90%'}></Flex>
                      <Flex px={[5,5,5,5]} flexDirection={['column','column','row']}   zIndex="2" w="100%" py="40px">
                            <Image flexBasis="10%" objectFit={'cover'} mr="4" w="80px" h="80px" src={information.image}></Image>  
                            <Flex flexBasis="90%"  flexDirection="column">
                                <Text as="div" fontSize={["sm","sm","lg"]}> <b>{information.name}</b> </Text> 
                                <Text as="div" mb="3" color="#aaaaaa" fontSize={["10px","10px","sm"]}> {information.occupation}</Text> 

                                <Text fontSize={["10px","10px","md"]} > <Box mr="2" as="span"><i style={{ fontSize: '20px' }}>"</i></Box><i> {information.comment}</i>
                                <Box ml="2" as="span"><i style={{ fontSize: '20px' }}>"</i></Box>
                                </Text>
                            </Flex>
                        </Flex>

                    </Flex>
            </>
        )
    }
    return (
        <div className="carousel-demo">
          
            <div className="card">
                <Carousel value={information} numVisible={2} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={Testimony}  />
            </div>

         
        </div>
    );
}


export default CarouselDemo