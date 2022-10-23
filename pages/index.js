import {server} from '../config'
import HomePage from '../components/Homepage/Homepage'
import Link from 'next/link'
import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'





const home = () => {

 


  return (
<>
      {
        <Box position="absolute" left="0" top="0" right="0">
          
          <Layout>
          <HomePage />
          </Layout>
         
        </Box>
      
      }


    </>
  )
}

export default home




