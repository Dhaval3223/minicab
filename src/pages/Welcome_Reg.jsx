import React, { useEffect } from 'react'
import Loginimg from '../image/icons/user.svg';
import Loginimg1 from '../image/icons/eye.svg';
import { Link } from 'react-router-dom';
import { FaEye, FaUser } from 'react-icons/fa';
import taxi from '../image/taxifront.png'
import { TiWarning } from "react-icons/ti";

function WelcomeReg() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div>
            {/* <Header/> */}
            <section className="login_register">
                <div className="container">
                    <div className="row d-flex py-5 justify-content-center align-items-center">

                        <div className="offset-lg-2 col-lg-8 pe-lg-5 rounded">
                            <div className='border border-warning p-4' style={{borderRadius:"40px"}}>
                                <p className='text-warning fw-bolder text-center'>Thank you for registering with  us</p>
                                <div className='d-flex justify-content-center'>
                                <TiWarning className='text-warning fs-1' />
                                </div>
                                <p className='text-light text-center fw-bold fs-6'>
                                    Your account may not be active until it is reviewed by our team
                                </p>
                                <p className='text-light text-center '>
                                    You will be notified once we activate your account. Kindly Ensure to update rest of the profile details on your first login for better experience.
                                </p>
                            </div>



                            {/* taxibg */}
                            <div className='taxi d-flex justify-content-center align-items-center'>
                                <img src={taxi} alt="" className='taxi-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer/> */}
        </div>
    )
}

export default WelcomeReg