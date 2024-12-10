import React, { useEffect } from 'react';
import Price from '../components/price';
import Works from '../components/works';
import Benefits from '../components/benefits';
import Start from '../components/start';
import Have from '../components/have';
import Frequently from '../components/frequently';

function Pricing() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}, []);
  return (
    <div>
        {/* <Header/> */}
        <Price/>
        <Works/>
        <Benefits/>
        <Start/>
        <Have/>
        <Frequently/>
        {/* <Footer/> */}
    </div>
  )
}

export default Pricing