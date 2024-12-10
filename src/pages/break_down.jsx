import React, { useEffect } from 'react'
import Jobimg1 from '../image/icons/plane.png';
import Jobimg2 from '../image/icons/handshake.png';
import { Link } from 'react-router-dom';

function Break_down() {
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
            <section className="content_sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="break_down">
                                <div className="row justify-content-between">
                                    <div className="col-xl-3 col-lg-4 mb-xl-0 mb-lg-0 mb-3">
                                        <h1 className="sub_heading fw_800">Booking Summary</h1>
                                        <div className="car_list" style={{ boxShadow: "none" }}>
                                            <div className="car_info">
                                                <div className="px-0">
                                                    <h6 className="mb-1">
                                                        Heathrow <i className="mdi mdi-arrow-right fs_16" />{" "}
                                                        Gatwick
                                                    </h6>
                                                    <p>
                                                        <i className="mdi mdi-map-marker-outline" /> 37 Miles
                                                        Approx.
                                                    </p>
                                                </div>
                                                <div className="px-0">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <p className="w-50">
                                                            <i className="mdi mdi-car-back" /> Saloon Car
                                                        </p>
                                                        <p className="w-50">
                                                            <i className="mdi mdi-account-group" /> 2 Passengers
                                                        </p>
                                                    </div>
                                                    <p className="mb-1">
                                                        <i className="mdi mdi-calendar-month" /> Wednesday, 23rd
                                                        Jan, 2023
                                                    </p>
                                                    <p className="mb-1">
                                                        <i className="mdi mdi-clock-outline" /> 13:00 PM
                                                    </p>
                                                </div>
                                                <div className="px-0">
                                                    <h6 className="mb-2 fw_700">Mr. Mark wood</h6>
                                                    <p className="mb-2">07920986234</p>
                                                    <p className="mb-2">
                                                        <img
                                                            src={Jobimg1}
                                                            height={12}
                                                        />{" "}
                                                        Flight No. <b>BA123 from New York</b>
                                                    </p>
                                                    <p className="mb-2">
                                                        <img
                                                            src={Jobimg2}
                                                            height={14}
                                                        />{" "}
                                                        Meet and Greet: <b>Required</b>
                                                    </p>
                                                    <p className="mb-0">
                                                        Special Instructions: <b>N/A</b>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-xl-0 col-lg-4">
                                        <div className="car_list" style={{ boxShadow: "none" }}>
                                            <div className="car_info bg-dark">
                                                <h2 className="sub_heading fw_800 text-white p-3 pb-0">
                                                    Price Breakdown
                                                </h2>
                                                <div className="px-3">
                                                    <p className="mb-1 text-white d-flex align-items-center justify-content-between">
                                                        Total Fare: <span className="fs_18 fw_600">£15000</span>
                                                    </p>
                                                    <p className="mb-1 text-white d-flex align-items-center justify-content-between">
                                                        Commission: <span className="fs_18 fw_600">£1000</span>
                                                    </p>
                                                    <p className="mb-1 text-white d-flex align-items-center justify-content-between">
                                                        Vat: <span className="fs_18 fw_600">£5</span>
                                                    </p>
                                                    <p className="mb-1 text-white d-flex align-items-center justify-content-between">
                                                        Total Amont: <span className="fs_18 fw_600">£16005</span>
                                                    </p>
                                                </div>
                                                <div className="px-3">
                                                    <label className="fs_14 text-white">
                                                        <input type="checkbox" name="" />I accept the Terms and
                                                        Conditions and pre-authorised the above total amount which
                                                        will be taken out as soon as any supplier accepts.
                                                    </label>
                                                </div>
                                                <div className="px-3">
                                                    <Link to={"/job_listing"} className="button_1 w-100">
                                                        Publish my job
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </div>
    )
}

export default Break_down