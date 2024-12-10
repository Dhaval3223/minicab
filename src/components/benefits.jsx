import React from 'react'
import Workingimg1 from '../image/flexibility.png';
import Workingimg2 from '../image/reduce_carbon.png';
import Workingimg3 from '../image/increase_profit.png';
import Workingimg4 from '../image/boost_business.png';


function benefits() {
    return (
        <div>
            {/* <section className="content_sec bg_dark">
                <div className="container">
                    <div className="row g-lg-3 g-md-3 g-sm-3 g-2">
                        <div className="col-12 text-center mb-lg-3 mb-md-3 mb-sm-3 mb-1">
                            <h2 className="main_heading text_yellow">
                                Benefits of working with us
                            </h2>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="working_benefit">
                                <img src={Workingimg1} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="working_benefit">
                                <img src={Workingimg2} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="working_benefit">
                                <img src={Workingimg3} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="working_benefit">
                                <img src={Workingimg4} />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

<section class="content_sec bg_dark">
    <div class="container">
        <div class="row g-lg-3 g-md-3 g-sm-3 g-2">
            <div class="col-12 text-center  mb-lg-3 mb-md-3 mb-sm-3 mb-1">
                <h2 class="main_heading text_yellow">Benefits of working with us</h2>
            </div>
            <div class="col-lg-3 col-6">
                <div class="working_benefit">
                    <div class="flipper">
                        <div class="front">
                            <img src={Workingimg3} alt="Increase Profits"/>
                            <h6 class="text_yellow mb-0">Increase Profits</h6>
                        </div>
                        <div class="back">
                            <img src={Workingimg3} alt="Increase Profits"/>
                            <p class="fs_14 mb-0">‘‘Say goodbye to empty miles and say hello to a more transfers and increase your profits’’</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <div class="working_benefit">
                    <div class="flipper">
                        <div class="front">
                            <img src={Workingimg4} alt="Increase Profits"/>
                            <h6 class="text_yellow mb-0">Boost Your Business</h6>
                        </div>
                        <div class="back">
                            <img src={Workingimg4} alt="Increase Profits" />
                            <p class="fs_14 mb-0">‘‘Say goodbye to empty miles and say hello to a more transfers and increase your profits’’</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <div class="working_benefit">
                    <div class="flipper">
                        <div class="front">
                            <img src={Workingimg1} alt="Increase Profits" />
                            <h6 class="text_yellow mb-0">Flexibility</h6>
                        </div>
                        <div class="back">
                            <img src={Workingimg1} alt="Increase Profits" />
                            <p class="fs_14 mb-0">‘‘Pick transfers that fit your schedule and coordinate your vehicles to work at your pace’’</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <div class="working_benefit">
                    <div class="flipper">
                        <div class="front">
                            <img src={Workingimg2} alt="Increase Profits" />
                            <h6 class="text_yellow mb-0">Reduce Carbon Footprints</h6>
                        </div>
                        <div class="back">
                            <img src={Workingimg2}alt="Increase Profits" />
                            <p class="fs_14 mb-0">‘‘Improve Carbon Footprints by travelling fewer miles empty’’</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
    )
}

export default benefits