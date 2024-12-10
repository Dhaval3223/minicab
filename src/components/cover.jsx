import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carimg from '../image/car-1.png';
import { Link } from 'react-router-dom';
import { getDataWithToken, getmethodDataWithToken } from '../utils/Api';
import { useQuery } from 'react-query';

function Cover() {
    const token = localStorage.getItem('token')
    const { data, isLoading, error, refetch } = useQuery("profileDataFetch", () => getmethodDataWithToken("https://124124.site/minicab/public/api/get-global-market-jobs", token), {
        enabled: !!token,  // Only fetch if token exists
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    console.log(data, "market");

    return (
        <div>
            <section className="content_sec">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-12 text-center mb-lg-3 mb-md-3 mb-sm-3 mb-1">
                            <h1 className="main_heading">Cover your empty miles</h1>
                        </div>
                        {
                            data?.data?.data?.map((item, index) => (
                                <div key={index} className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                    <div className="car_list d-flex flex-column h-100">
                                        <div className="car_info d-flex flex-column flex-grow-1">
                                            <div>
                                                <h6 className="mb-1">
                                                    {item?.pick_up} <i className="mdi mdi-arrow-right fs_16" /> {item?.drop_off}
                                                </h6>
                                                <p>
                                                    <i className="mdi mdi-map-marker-outline" /> {item?.total_distance}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <p className="w-50">
                                                        <i className="mdi mdi-car-back" /> {item?.vehicle_type}
                                                    </p>
                                                    <p className="w-50">
                                                        <i className="mdi mdi-account-group" /> {item?.passenger_count} Passengers
                                                    </p>
                                                </div>
                                                <p className="mb-1">
                                                    <i className="mdi mdi-calendar-month" /> {item?.pick_up_date_time}
                                                </p>
                                                <p className="mb-1">
                                                    <i className="mdi mdi-clock-outline" /> {item?.pick_up_time}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <p className="fs_15">Fare :</p>
                                                    <h5 className="mb-0 fw_800 ps-2">{item?.net_journey_price}</h5>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <Link to="/published_job" className="btn_bck w-100">
                                                    Apply
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="car_list">
                                <div className="car_img">
                                    <img src={Carimg} alt="Car Name" />
                                </div>
                                <div className="car_info">
                                    <div>
                                        <h6 className="mb-1">
                                            Heathrow <i className="mdi mdi-arrow-right fs_16" /> Gatwick
                                        </h6>
                                        <p>
                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles Approx.
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
                                            <i className="mdi mdi-calendar-month" /> Wednesday, 23rd Jan,
                                            2023
                                        </p>
                                        <p className="mb-1">
                                            <i className="mdi mdi-clock-outline" /> 13:00 PM
                                        </p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="fs_15">Fare :</p>
                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                        </div>
                                    </div>
                                    <div className="border-bottom-0 d-flex">
                                     <Link to={"/published_job"} className="btn_brd w-50">
                                            Details
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to={"/published_job"} className="btn_bck w-50">
                                            Accept Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="car_list">
                                <div className="car_img">
                                    <img src={Carimg} alt="Car Name" />
                                </div>
                                <div className="car_info">
                                    <div>
                                        <h6 className="mb-1">
                                            Heathrow <i className="mdi mdi-arrow-right fs_16" /> Gatwick
                                        </h6>
                                        <p>
                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles Approx.
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
                                            <i className="mdi mdi-calendar-month" /> Wednesday, 23rd Jan,
                                            2023
                                        </p>
                                        <p className="mb-1">
                                            <i className="mdi mdi-clock-outline" /> 13:00 PM
                                        </p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="fs_15">Fare :</p>
                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                        </div>
                                    </div>
                                    <div className="border-bottom-0 d-flex">
                                     <Link to={"/published_job"} className="btn_brd w-50">
                                            Details
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to={"/published_job"} className="btn_bck w-50">
                                            Accept Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="car_list">
                                <div className="car_img">
                                    <img src={Carimg} alt="Car Name" />
                                </div>
                                <div className="car_info">
                                    <div>
                                        <h6 className="mb-1">
                                            Heathrow <i className="mdi mdi-arrow-right fs_16" /> Gatwick
                                        </h6>
                                        <p>
                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles Approx.
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
                                            <i className="mdi mdi-calendar-month" /> Wednesday, 23rd Jan,
                                            2023
                                        </p>
                                        <p className="mb-1">
                                            <i className="mdi mdi-clock-outline" /> 13:00 PM
                                        </p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="fs_15">Fare :</p>
                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                        </div>
                                    </div>
                                    <div className="border-bottom-0 d-flex">
                                     <Link to={"/published_job"} className="btn_brd w-50">
                                            Details
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to={"/published_job"} className="btn_bck w-50">
                                            Accept Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="car_list">
                                <div className="car_img">
                                    <img src={Carimg} alt="Car Name" />
                                </div>
                                <div className="car_info">
                                    <div>
                                        <h6 className="mb-1">
                                            Heathrow <i className="mdi mdi-arrow-right fs_16" /> Gatwick
                                        </h6>
                                        <p>
                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles Approx.
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
                                            <i className="mdi mdi-calendar-month" /> Wednesday, 23rd Jan,
                                            2023
                                        </p>
                                        <p className="mb-1">
                                            <i className="mdi mdi-clock-outline" /> 13:00 PM
                                        </p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="fs_15">Fare :</p>
                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                        </div>
                                    </div>
                                    <div className="border-bottom-0 d-flex">
                                     <Link to={"/published_job"} className="btn_brd w-50">
                                            Details
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to={"/published_job"} className="btn_bck w-50">
                                            Accept Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="car_list">
                                <div className="car_img">
                                    <img src={Carimg} alt="Car Name" />
                                </div>
                                <div className="car_info">
                                    <div>
                                        <h6 className="mb-1">
                                            Heathrow <i className="mdi mdi-arrow-right fs_16" /> Gatwick
                                        </h6>
                                        <p>
                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles Approx.
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
                                            <i className="mdi mdi-calendar-month" /> Wednesday, 23rd Jan,
                                            2023
                                        </p>
                                        <p className="mb-1">
                                            <i className="mdi mdi-clock-outline" /> 13:00 PM
                                        </p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="fs_15">Fare :</p>
                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                        </div>
                                    </div>
                                    <div className="border-bottom-0 d-flex">
                                     <Link to={"/published_job"} className="btn_brd w-50">
                                            Details
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to={"/published_job"} className="btn_bck w-50">
                                            Accept Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="car_list">
                                <div className="car_img">
                                    <img src={Carimg} alt="Car Name" />
                                </div>
                                <div className="car_info">
                                    <div>
                                        <h6 className="mb-1">
                                            Heathrow <i className="mdi mdi-arrow-right fs_16" /> Gatwick
                                        </h6>
                                        <p>
                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles Approx.
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
                                            <i className="mdi mdi-calendar-month" /> Wednesday, 23rd Jan,
                                            2023
                                        </p>
                                        <p className="mb-1">
                                            <i className="mdi mdi-clock-outline" /> 13:00 PM
                                        </p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="fs_15">Fare :</p>
                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                        </div>
                                    </div>
                                    <div className="border-bottom-0 d-flex">
                                     <Link to={"/published_job"} className="btn_brd w-50">
                                            Details
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to={"/published_job"} className="btn_bck w-50">
                                            Accept Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="car_list">
                                <div className="car_img">
                                    <img src={Carimg} alt="Car Name" />
                                </div>
                                <div className="car_info">
                                    <div>
                                        <h6 className="mb-1">
                                            Heathrow <i className="mdi mdi-arrow-right fs_16" /> Gatwick
                                        </h6>
                                        <p>
                                            <i className="mdi mdi-map-marker-outline" /> 37 Miles Approx.
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
                                            <i className="mdi mdi-calendar-month" /> Wednesday, 23rd Jan,
                                            2023
                                        </p>
                                        <p className="mb-1">
                                            <i className="mdi mdi-clock-outline" /> 13:00 PM
                                        </p>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="fs_15">Fare :</p>
                                            <h5 className="mb-0 fw_800 ps-2">£1500</h5>
                                        </div>
                                    </div>
                                    <div className="border-bottom-0 d-flex">
                                     <Link to={"/published_job"} className="btn_brd w-50">
                                            Details
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to={"/published_job"} className="btn_bck w-50">
                                            Accept Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-12 text-center mt-lg-5 mt-4">
                            <Link to="/job_listing" className="button_2">
                                View All
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Cover