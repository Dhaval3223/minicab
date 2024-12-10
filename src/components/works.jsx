import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutimg1 from '../image/step-1.png';
import Aboutimg2 from '../image/step-2.png';
import Aboutimg3 from '../image/step-3.png';
import Aboutimg4 from '../image/step-4.png';
import Aboutimg5 from '../image/step-5.png';


function works() {
    return (
        <div>
            <section className="content_sec bg_gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center mb-3">
                            <h2 className="main_heading">How it works</h2>
                        </div>
                        <div className="col-lg-7">
                            <div className="step_div">
                                <div className="row justify-content-center align-items-center px-lg-3 px-1">
                                    <div className="col-lg-4 col-5 text-end">
                                        <img
                                            src={Aboutimg1}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-lg-3 col-2">
                                        <span className="step_num">1</span>
                                    </div>
                                    <div className="col-lg-4 col-5">
                                        <p className="para fs_14 mb-0">
                                            Upload all requested details and get familiar with our policies
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="step_div">
                                <div className="row justify-content-center align-items-center px-lg-3 px-1">
                                    <div className="col-lg-4 col-5 text-end">
                                        <p className="para fs_14 mb-0">
                                            All partners will get information about new bookings as soon as
                                            they arrive.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-2">
                                        <span className="step_num">2</span>
                                    </div>
                                    <div className="col-lg-4 col-5">
                                        <img
                                            src={Aboutimg2}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="step_div">
                                <div className="row justify-content-center align-items-center px-lg-3 px-1">
                                    <div className="col-lg-4 col-5 text-end">
                                        <img
                                            src={Aboutimg3}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-lg-3 col-2">
                                        <span className="step_num">3</span>
                                    </div>
                                    <div className="col-lg-4 col-5">
                                        <p className="para fs_14 mb-0">
                                            Thereafter you can check the details and you can accept it if
                                            you like to.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="step_div">
                                <div className="row justify-content-center align-items-center px-lg-3 px-1">
                                    <div className="col-lg-4 col-5 text-end">
                                        <p className="para fs_14 mb-0">
                                            Deliver a great customer experience during your transfer
                                            service.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-2">
                                        <span className="step_num">4</span>
                                    </div>
                                    <div className="col-lg-4 col-5">
                                        <img
                                            src={Aboutimg4}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="step_div">
                                <div className="row justify-content-center align-items-center px-lg-3 px-1">
                                    <div className="col-lg-4 col-5 text-end">
                                        <img
                                            src={Aboutimg5}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-lg-3 col-2">
                                        <span className="step_num">5</span>
                                    </div>
                                    <div className="col-lg-4 col-5">
                                        <p className="para fs_14 mb-0">
                                            Get your pay-out directly to your bank account
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-lg-5 mt-4">
                            <a href="" className="button_2">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default works