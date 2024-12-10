import React, { useEffect } from 'react'
import How_banner from '../components/how_banner'
import Works from '../components/works'
import Benefits from '../components/benefits'
import Start from '../components/start'
import Have from '../components/have'
import Frequently from '../components/frequently'
function How_it_works() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        {/* <Header/> */}
        <How_banner/>
        <Works/>
        <Benefits/>
        <Start/>
        <Have/>
        <Frequently/>
        {/* <Footer/> */}
    </div>
  )
}

export default How_it_works