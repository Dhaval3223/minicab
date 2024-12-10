import React, { useEffect, useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';
import { baseUrl, forgot_url } from '../utils/Url';
import { toastInfo, toastSuccess } from '../utils/Notifycustom';

function Reset_password() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRegex = /^[^\d\s@][^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setLoading(true);

        try {
            if (email && !emailRegex.test(email)) {
                toastInfo('Please enter a valid email address', 'error');
                return;
              }
            const url = `${baseUrl}${forgot_url}`;
            const response = await axios.post(url, { email }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200) {
                // setMessage("A reset link has been sent to your email.");
                toastSuccess("A reset link has been sent to your email.")
                localStorage.setItem('Reset-password-token', response?.data?.token);
                localStorage.setItem('Reset-password-email', email);
                // Wait 5 seconds before navigating to the change password page
                // setTimeout(() => {
                //     navigate('/change_password'); // Replace '/change-password' with the actual path of the change password page
                // }, 5000); // 5000 ms = 5 seconds
            } else {
                setError(response.data.error || "Something went wrong. Please try again.");
            }
            
        } catch (error) {
            setError(error?.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="login_register py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 ps-lg-5 text-lg-start text-center">
                            <h3 className="main_heading fw_700 text-white">Welcome to</h3>
                            <h1
                                className="fs_50 fw_600 text-white"
                                style={{ width: "max-content" }}
                            >
                                Minicab Network
                                <hr className="bg_yellow" style={{ height: 2, opacity: "0.7" }} />
                            </h1>
                            <p className="fs_14 para mb-0 text-white">
                                C2 solves the root causes of these problems – and delivers significant
                                value. Join us and start building your trust today.
                            </p>
                        </div>
                        <div className="offset-lg-2 col-lg-5 pe-lg-5">
                            <form className="form_box" onSubmit={handleResetPassword}>
                                <div className="row g-3">
                                    <div className="col-12 text-lg-start text-center">
                                        <h2 className="main_heading mb-1">Reset Password</h2>
                                        <p className="para fs_14 fw_600 mb-0">
                                            To reset your password, enter your email address below, and a reset link will be emailed to you shortly.
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input 
                                                type="email" 
                                                placeholder="Enter email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <span>
                                                <FaUser className='usericon' />
                                            </span>
                                        </div>
                                    </div>
                                    {message && <p className="text-success">{message}</p>}
                                    {error && <p className="text-danger">{error}</p>}
                                    <div className="col-12 text-center mt-4">
                                        <button type="submit" className="button_1 w-100" disabled={loading}>
                                            {loading ? "Loading..." : "Reset Password"}
                                        </button>
                                        <p className="para fs_14 fw_600 mt-3 mb-0">
                                            Not a member yet?{" "}
                                            <Link to="/registration" className="li_su">
                                                Sign up here
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reset_password;
