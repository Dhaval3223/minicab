import React from 'react'
import Bannerimg1 from '../image/banner-1.png';

function faq_banner() {
    return (
        <div>
            <section className="banner_other">
                <div className="banner">
                    <div className="banner_img">
                        <img src={Bannerimg1} alt="Banner" />
                        <div className="banner_info">
                            <h3 className="mb-0 text-capitalize">FAQs</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default faq_banner