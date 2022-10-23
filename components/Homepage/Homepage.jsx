import React from 'react'

import Banner from '../SubComponents/Banner'
import About from '../SubComponents/About'
import Stats from '../SubComponents/Stats'
import Why from '../SubComponents/Why'
import WebCategories from '../SubComponents/WebCategories'
import ExtraCategories from '../SubComponents/ExtraCategories'
import Staff from '../SubComponents/Staff'

const Homepage = () => {
  return (
    <div>
    <Banner/>
    <About/>
    <Stats/>
    <Why/>
    <WebCategories/>
    <ExtraCategories/>
    <Staff/>
    </div>
  )
}

export default Homepage

/**
 * <Banner/>
    <About/>
    <Stats/>
    <Staff/>
    <Footer/>
 */