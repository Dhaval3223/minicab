import React, { useEffect } from 'react';
import Carimg from '../image/car-1.png';
import Jobimg1 from '../image/icons/plane.png';
import Jobimg2 from '../image/icons/handshake.png';
import { Link } from 'react-router-dom';

function Published_job() {
    const handleIconClick = () => {
        // Find the closest ancestor with class 'user_view' and remove 'user_mob_open' class
        const userView = document.querySelector('.user_mob_head').closest('.user_view');
        if (userView) {
          userView.classList.remove('user_mob_open');
        }
    
        // Find the closest ancestor with class 'z9999' and remove 'z9999' class
        const z9999Element = document.querySelector('.user_mob_head').closest('.z9999');
        if (z9999Element) {
          z9999Element.classList.remove('z9999');
        }
      };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div>
            {/* <Header /> */}
            <section className="content_sec py-3 z9999">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h1 className="sub_heading fw_800 mb-3">
                                Dashboard &nbsp;&nbsp;&nbsp;{" "}
                                <Link to={"/user_dashboard"} className="button_1 fs_13 py-2 px-3">
                                    Publish New Job
                                </Link>
                            </h1>
                            <div className="user_dashboard">
                                <div className="user_sidenav">
                                    <h6 className="sub_heading fs_16 my-2">
                                        AS A PUBLISHER <span className="line me-0" />
                                    </h6>
                                    <ul>
                                        <li className="active">
                                            <a href="published_job.php">Published Jobs (yet to assign)</a>
                                        </li>
                                        <li>
                                            <a href="">Assigned Jobs</a>
                                        </li>
                                        <li>
                                            <a href="">Completed Journeys</a>
                                        </li>
                                        <li>
                                            <a href="">Terms and Conditions</a>
                                        </li>
                                    </ul>
                                    <h6 className="sub_heading fs_16 my-2">
                                        AS A SUPPLIER <span className="line me-0" />
                                    </h6>
                                    <ul>
                                        <li>
                                            <a href="">Upcoming</a>
                                        </li>
                                        <li>
                                            <a href="">Completed</a>
                                        </li>
                                        <li>
                                            <a href="">Handover</a>
                                        </li>
                                        <li>
                                            <a href="">Statement</a>
                                        </li>
                                    </ul>
                                    <hr className="my-2" />
                                    <ul>
                                        <li>
                                            <a href="">Ask a question</a>
                                        </li>
                                        <li>
                                            <a href="">Update Profile</a>
                                        </li>
                                        <li>
                                            <a href="">Change Password</a>
                                        </li>
                                        <li>
                                            <Link to={"/user_subscription"}>Subscription</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="user_view user_mob_open">
                                    {/* <div className="user_mob_head">
                                        <h6>Published Job</h6>
                                        <i
                                            className="fas fa-angle-left fs_14"
                                            onclick="$(this).closest('.user_view').removeClass('user_mob_open'); $(this).closest('.z9999').removeClass('z9999');"
                                        />
                                    </div> */}
                                    <div className="user_mob_head">
                                        <h6>Published Job</h6>
                                        <i className="fas fa-angle-left fs_14" onClick={handleIconClick}></i>
                                    </div>
                                    <div className="row g-lg-3 g-md-3 g-2">

                                        <div className="col-lg-4 col-12">
                                            <div className="car_list">
                                                <div className="car_img">
                                                    <img src={Carimg} alt="Car Name" />
                                                </div>
                                                <div className="car_info">
                                                    <div>
                                                        <h6 className="mb-1">
                                                            Heathrow <i className="mdi mdi-arrow-right fs_16" />{" "}
                                                            Gatwick
                                                        </h6>
                                                        <p>
                                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles
                                                            Approx.
                                                        </p>
                                                    </div>
                                                    <div>
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
                                                    <div>
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
                                                    <div className="border-bottom-0">
                                                        <div className="d-flex align-items-center mb-1">
                                                            <p className="fs_15">Fare :</p>
                                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12">
                                            <div className="car_list">
                                                <div className="car_img">
                                                    <img src={Carimg} alt="Car Name" />
                                                </div>
                                                <div className="car_info">
                                                    <div>
                                                        <h6 className="mb-1">
                                                            Heathrow <i className="mdi mdi-arrow-right fs_16" />{" "}
                                                            Gatwick
                                                        </h6>
                                                        <p>
                                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles
                                                            Approx.
                                                        </p>
                                                    </div>
                                                    <div>
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
                                                    <div>
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
                                                    <div className="border-bottom-0">
                                                        <div className="d-flex align-items-center mb-1">
                                                            <p className="fs_15">Fare :</p>
                                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12">
                                            <div className="car_list">
                                                <div className="car_img">
                                                    <img src={Carimg} alt="Car Name" />
                                                </div>
                                                <div className="car_info">
                                                    <div>
                                                        <h6 className="mb-1">
                                                            Heathrow <i className="mdi mdi-arrow-right fs_16" />{" "}
                                                            Gatwick
                                                        </h6>
                                                        <p>
                                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles
                                                            Approx.
                                                        </p>
                                                    </div>
                                                    <div>
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
                                                    <div>
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
                                                    <div className="border-bottom-0">
                                                        <div className="d-flex align-items-center mb-1">
                                                            <p className="fs_15">Fare :</p>
                                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                                        </div>
                                                    </div>
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

export default Published_job