import React from 'react'

import { Box} from '@chakra-ui/react'
import AboutUs from '../components/About/AboutUs'
import Layout from '../components/Layout/Layout'

const about = () => {
  return (
    <Box position="absolute" left="0" top="0" right="0">
          
    <Layout>
    <AboutUs />
    </Layout>
   
  </Box>
  )
}

export default about