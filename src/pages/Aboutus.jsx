import React, { useEffect } from 'react'
import AboutData from '../components/aboutData'
import About_banner from '../components/about_banner'

function Faq() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div>
            {/* <Header /> */}
            <About_banner />
            <AboutData />
            {/* <Footer /> */}
        </div>
    )
}

export default Faq