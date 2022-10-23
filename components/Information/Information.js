import React from 'react'
import { Tabs, TabPanels, TabPanel, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Button, Input, Grid, Container, Text, Heading, Divider, VStack, HStack, Image } from '@chakra-ui/react'
import Customtabs from './Customtabs'
import Details from './Details'
import Padding from '../SubComponents/Padding'
import Pricing from './Pricing'
import PricingVariant from './PricingVariant'

import Portfolio from '../SubComponents/Portfolio'
const Information = () => {

  
    return (
        <>
       <Padding name="Service Details"
    text="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
    />
    <Details/>
    <Portfolio/>
      {false && <Customtabs/>}  

        <PricingVariant/>
    </>
    )
}

export default Information