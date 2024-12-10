import React from 'react'
import { Link } from 'react-router-dom'

function publish() {
    return (
        <div>
            <section className="content_sec bg_gray">
                <div className="container">
                    <div className="row px-lg-4">
                        <div className="offset-lg-1 col-lg-10">
                            <div className="row g-lg-4 g-3">
                                <div className="col-lg-6 col-md-6">
                                    <div className="compo_42">
                                        <h5>Do you have a journey that you need <br/> covered?</h5>
                                        <Link to={"/user_dashboard"} className="button_1 w-100">
                                            Publish Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="compo_42">
                                        <h5>Do you have a journey that you need <br/> covered?</h5>
                                        <Link to={"/job_listing"} className="button_1 w-100">
                                            Find Fare
                                        </Link>
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

export default publish