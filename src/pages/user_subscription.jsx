import React, { useEffect } from 'react'

function User_subscription() {
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
        })
    }, [])
    return (
        <div>
            {/* <Header /> */}
            <section className="content_sec py-3 z9999">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h1 className="sub_heading fw_800 mb-3">
                                Dashboard &nbsp;&nbsp;&nbsp;{" "}
                                <a href="" className="button_1 fs_13 py-2 px-3">
                                    Publish New Job
                                </a>
                            </h1>
                            <div className="user_dashboard">
                                <div className="user_sidenav">
                                    <h6 className="sub_heading fs_16 my-2">
                                        AS A PUBLISHER <span className="line me-0" />
                                    </h6>
                                    <ul>
                                        <li>
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
                                        <li className="active">
                                            <a href="user_subscription.php">Subscription</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="user_view user_mob_open">
                                    <div className="user_mob_head">
                                        <h6>Subscription</h6>
                                        <i
                                            className="fas fa-angle-left fs_14"
                                            onClick={handleIconClick}
                                        />
                                    </div>
                                    <div className="row g-lg-3 g-md-3 g-2">
                                        <div className="col-xl-4 col-lg-4">
                                            <div className="pricing_table">
                                                <div>
                                                    <br />
                                                    <h5 className="fw_700 mb-3">7 Days free trial</h5>
                                                    <h4 className="price">£500</h4>
                                                    <br />
                                                    <h6 className="fw_700">What's included:</h6>
                                                    <ul>
                                                        <li className="para fs_15 mb-2">
                                                            Post or Accept 10 Journeys
                                                        </li>
                                                        <li className="para fs_15 mb-2">No monthly charge.</li>
                                                        <li className="para fs_15 mb-2">
                                                            10% + VAT – You will only pay if any supplier accepts
                                                            your posted job.
                                                        </li>
                                                        <li className="para fs_15 mb-2">Risk Free</li>
                                                        <li className="para fs_15 mb-2">
                                                            100% Safe and Secured.
                                                        </li>
                                                    </ul>
                                                    <br />
                                                </div>
                                                <a href="" className="button_1 w-100">
                                                    Subscribe Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4">
                                            <div className="pricing_table bg-dark">
                                                <div>
                                                    <p
                                                        className="bg_yellow px-3 py-1 fs_12 fw_600 mb-2"
                                                        style={{ width: "max-content", borderRadius: 15 }}
                                                    >
                                                        Popular
                                                    </p>
                                                    <h5 className="fw_700 mb-3 text-white">Monthly</h5>
                                                    <h4 className="price text-white mb-0">£10,000</h4>
                                                    <p className="text-white fs_14">per month + VAT</p>
                                                    <br />
                                                    <h6 className="fw_700 text-white">What's included:</h6>
                                                    <ul>
                                                        <li className="text-muted fs_15 mb-2">
                                                            Post or Accept unlimited transfers.
                                                        </li>
                                                        <li className="text-muted fs_15 mb-2">Cancel anytime</li>
                                                        <li className="text-muted fs_15 mb-2">
                                                            10% + VAT – You will only pay if any supplier accepts
                                                            your posted job.
                                                        </li>
                                                        <li className="text-muted fs_15 mb-2">Risk Free</li>
                                                        <li className="text-muted fs_15 mb-2">
                                                            100% Safe and Secured.
                                                        </li>
                                                    </ul>
                                                    <br />
                                                </div>
                                                <a href="" className="button_1 w-100">
                                                    Subscribe Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4">
                                            <div className="pricing_table">
                                                <div>
                                                    <br />
                                                    <h5 className="fw_700 mb-3">Premium</h5>
                                                    <h4 className="price mb-0">£30,000</h4>
                                                    <p className="fs_14">per month + VAT</p>
                                                    <br />
                                                    <h6 className="fw_700">What's included:</h6>
                                                    <ul>
                                                        <li className="para fs_15 mb-2">
                                                            Post or Accept unlimited transfers.
                                                        </li>
                                                        <li className="para fs_15 mb-2">Cancel anytime</li>
                                                        <li className="para fs_15 mb-2">
                                                            10% + VAT – You will only pay if any supplier accepts
                                                            your posted job.
                                                        </li>
                                                        <li className="para fs_15 mb-2">Risk Free</li>
                                                        <li className="para fs_15 mb-2">
                                                            100% Safe and Secured.
                                                        </li>
                                                    </ul>
                                                    <br />
                                                </div>
                                                <a href="" className="button_1 w-100">
                                                    Subscribe Now
                                                </a>
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

export default User_subscription