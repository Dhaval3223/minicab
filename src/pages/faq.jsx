import React, { useEffect } from 'react'
import Faq_banner from '../components/faq_banner'
import Questions from '../components/questions'

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
            <Faq_banner />
            <Questions />
            {/* <Footer /> */}
        </div>
    )
}

export default Faq
