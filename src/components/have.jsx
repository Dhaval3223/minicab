import React from 'react'
import { Link } from 'react-router-dom'

function have() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row gy-3 align-items-center have_something_mind">
                        <div className="col-lg-6 col-md-8 col-sm-4 text-lg-start text-md-start text-sm-start text-center">
                            <h6 className="fs_22 text_yellow mb-1 fw_600">
                                Have something in mind?
                            </h6>
                            <p className="text_yellow mb-0">For further Queries contact us now</p>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-4 text-lg-end text-md-end text-sm-end text-center">
                            <Link to={"/contact"}  className="button_1">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default have