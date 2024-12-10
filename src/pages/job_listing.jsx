import React, { useEffect } from 'react';
import Carimg from '../image/car-1.png';
import Filterimg from '../image/filter.png';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getmethodDataWithToken } from '../utils/Api';

function Job_listing() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    const token = localStorage.getItem('token')

    const {
        data: marketData,
        isLoading: isMarketLoading,
        error: marketError,
        refetch: refetchMarket
    } = useQuery(
        "globalMarketJobs",
        () => getmethodDataWithToken("https://124124.site/minicab/public/api/get-global-market-jobs", token),
        {
            enabled: !!token // Only fetch if token exists
        }
    );

    // Query for global auction jobs
    const {
        data: auctionData,
        isLoading: isAuctionLoading,
        error: auctionError,
        refetch: refetchAuction
    } = useQuery(
        "globalAuctionJobs",
        () => getmethodDataWithToken("https://124124.site/minicab/public/api/get-global-auction-jobs", token),
        {
            enabled: !!token // Only fetch if token exists
        }
    );

    // Loading and Error Handling
    if (isMarketLoading || isAuctionLoading) {
        return <div>Loading...</div>;
    }

    if (marketError || auctionError) {
        return (
            <div>
                Error: {marketError?.message || auctionError?.message}
            </div>
        );
    }
    return (
        <div>
            {/* <Header /> */}
            <section className="py-3">
                <div className="container">
                    <div className="row gy-lg-3 gy-md-3 gy-1">
                        <div className="col-12">
                            <ul className="bread_cumbs mb-lg-3 mb-md-3 mb-1">
                                <li>
                                    <a href="index.php">Minicab Network Home</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Job listing</a>
                                </li>
                            </ul>
                            <div>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="market-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#market"
                                            type="button"
                                            role="tab"
                                            aria-controls="market"
                                            aria-selected="true"
                                        >
                                            Market
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="auction-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#auction"
                                            type="button"
                                            role="tab"
                                            aria-controls="auction"
                                            aria-selected="false"
                                        >
                                            Auction
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter_sec filter_slide">
                                <div className="filter_head">
                                    <h6 className="pb-lg-0">
                                        <img src={Filterimg} /> Filter
                                    </h6>
                                    <i className="fas fa-angle-left" onclick="openFilter()" />
                                </div>
                                <div className="filter_body pb-1">
                                    <div className="form_box gy-3 gx-2 p-0 m-0 row">
                                        <div className="col-lg-2">
                                            <label>Car type</label>
                                            <div className="input_grp">
                                                <select>
                                                    <option value="">Select car type</option>
                                                    <option value="">Select car 1</option>
                                                    <option value="">Select car 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3">
                                            <label>Fare range</label>
                                            <div className="input_grp">
                                                <select>
                                                    <option value="">Select fare range</option>
                                                    <option value="">Select fare 1</option>
                                                    <option value="">Select fare 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3">
                                            <label>Pick up</label>
                                            <div className="input_grp">
                                                <select>
                                                    <option value="">Select pick up</option>
                                                    <option value="">Select pick up 1</option>
                                                    <option value="">Select pick up 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3">
                                            <label>Drop off</label>
                                            <div className="input_grp">
                                                <select>
                                                    <option value="">Select drop off</option>
                                                    <option value="">Select drop 1</option>
                                                    <option value="">Select drop 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3">
                                            <label>Date</label>
                                            <div className="input_grp">
                                                <input type="date" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 mt-lg-3 mt-0">
                                            <label style={{ opacity: 0 }}>.</label>
                                            <div className="filter_btn">
                                                <button
                                                    type="button"
                                                    style={{ backgroundColor: "transparent", color: "#999" }}
                                                >
                                                    Clear All
                                                </button>
                                                <button type="button">Apply Filter</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="sort_head">
                                <h6 className="fs_14 fw_700 mb-0">232 Results Found</h6>
                                <div className="d-flex align-items-center">
                                    <h6 className="fs_14 fw_700 mb-0">Sort by: &nbsp;</h6>
                                    <select>
                                        <option value="">Recommended</option>
                                    </select>
                                    {/* <div className="d-lg-none d-md-none d-block ps-2">
                                        <img
                                            src="viewer_assets/images/filter.png"
                                            onclick="openFilter()"
                                            className="ps-2 py-2"
                                        />
                                    </div> */}
                                </div>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                {/* market tab */}
                                <div
                                    className="tab-pane fade show active"
                                    id="market"
                                    role="tabpanel"
                                    aria-labelledby="market-tab"
                                >
                                    <div className="row g-lg-3 g-md-3 g-2">
                                        {
                                            marketData?.data?.data?.map((item, index) => (
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

                                        <div className="pagination">
                                            <ul>
                                                <li>
                                                    <a href="">
                                                        <i className="fas fa-angle-left" />
                                                    </a>
                                                </li>
                                                <li className="active">
                                                    <a href="">1</a>
                                                </li>
                                                <li>
                                                    <a href="">2</a>
                                                </li>
                                                <li>
                                                    <a href="">3</a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fas fa-angle-right" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* auction tab */}
                                <div
                                    className="tab-pane fade"
                                    id="auction"
                                    role="tabpanel"
                                    aria-labelledby="auction-tab"
                                >
                                    <div className="row g-lg-3 g-md-3 g-2">
                                        {
                                            auctionData?.data?.data?.map((item, index) => (
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
                                                                    Quote
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        <div className="pagination">
                                            <ul>
                                                <li>
                                                    <a href="">
                                                        <i className="fas fa-angle-left" />
                                                    </a>
                                                </li>
                                                <li className="active">
                                                    <a href="">1</a>
                                                </li>
                                                <li>
                                                    <a href="">2</a>
                                                </li>
                                                <li>
                                                    <a href="">3</a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fas fa-angle-right" />
                                                    </a>
                                                </li>
                                            </ul>
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

export default Job_listing