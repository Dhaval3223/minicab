import React from 'react'
import ContactBanner from '../image/banner-1.png';

function contactbanner() {
    return (
        <div>
            <section className="banner_other">
                <div className="banner">
                    <div className="banner_img">
                        <img src={ContactBanner} alt="Banner" />
                        <div className="banner_info">
                            <h3 className="mb-2 text-capitalize">Get in touch</h3>
                            <p className=' mb-0 text-white'>Give us a call or email us anytime</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default contactbanner