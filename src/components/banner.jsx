import React from 'react'
import Bannerimg1 from '../image/banner-1.png';
import Bannerimg2 from '../image/car.png';
import { Link } from 'react-router-dom';

function banner() {
    return (
        <div>
            <section className="banner_home">
                <div className="banner">
                    <div className="banner_img">
                        <img src={Bannerimg1} alt="Banner" />
                        <div className="banner_info">
                            <p className="bnnr_subhead mb-lg-0 mb-md-0 mb-2">
                                MINICAB NETWORK BOARD
                            </p>
                            <h3 className="my-lg-4 my-md-3 my-2">
                                PUBLISH JOB. FIND IT FAST. BOOK IT FIRST
                            </h3>
                            <h5 className="mb-lg-4 mb-3">
                                Come on board &amp; start receiving transfers with MINICAB NETWORK
                            </h5>
                            <Link to={"/registration"} className="button_1 m-auto">
                                Get Started
                            </Link>
                        </div>
                        <div className="banner_bottom">
                            <img src={Bannerimg2} alt="Car" />
                        </div>
                    </div>
                </div>
            </section>
            <div class="bnnr_gap"></div>
        </div>
    )
}

export default banner