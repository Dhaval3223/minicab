import React, { useEffect } from 'react'
import Contactbanner from '../components/contactbanner'
import Contactsec from '../components/contactsec'
import ContactusData from '../components/contactusData'
function Contact() {
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
         <Contactbanner/>
         <ContactusData/>
         {/* <Contactsec/> */}
         {/* <Footer/> */}
    </div>
  )
}

export default Contact