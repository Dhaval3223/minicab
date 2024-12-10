import React from 'react'

function contactsec() {
    return (
        <div>
            <section className="content_sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <form className="form_box p-0 m-0">
                                <div className="row g-3">
                                    <div className="col-12 text-center">
                                        <p className="para fs_15 mb-1">
                                            Give us a call or email us anytime, we endeavor to answer all
                                            enquiries within 24 hours on business days.
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-3">
                                            <div className="col-lg-6">
                                                <label>Full Name
                                                    <span className='text-danger'>*</span>
                                                </label>
                                                
                                                <div className="input_grp">
                                                    <input type="text" placeholder="Enter full name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>Company Name</label>
                                                <div className="input_grp">
                                                    <input type="text" placeholder="Enter company name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>Email
                                                <span className='text-danger'>*</span>
                                                </label>
                                                <div className="input_grp">
                                                    <input type="email" placeholder="Enter email address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>Phone Number
                                                <span className='text-danger'>*</span>
                                                </label>
                                                <div className="input_grp">
                                                    <input type="text" placeholder="Enter phone number" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label>Message
                                                <span className='text-danger'>*</span>
                                                </label>
                                                <div className="input_grp">
                                                    <textarea
                                                        placeholder="Write your message"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 text-center mt-4 mx-auto">
                                        <button type="button" className="button_1 w-100 mt-lg-3">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default contactsec