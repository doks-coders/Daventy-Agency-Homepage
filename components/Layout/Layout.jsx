import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'

import {useEffect} from 'react' 

import AOS from "aos";
import "aos/dist/aos.css";



const Layout = ({children}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Header color="gray.600" />
    <Box bg="white" color="gray.600">
    {children}
    </Box>
    
    <Footer/>
    </>
  )
}

export default Layout