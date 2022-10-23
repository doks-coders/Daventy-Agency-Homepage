
import About from '../SubComponents/About'

import React from 'react'
import Padding from '../SubComponents/Padding'
import Stats from '../SubComponents/Stats'
import Testimonials from '../SubComponents/Testimonials'
const AboutUs = () => {
  return (
    <>
    <Padding name="About Us"
    text="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
    />
    <About/>
    <Stats/>
    <Testimonials/>
    </>
  )
}

export default AboutUs