import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import taxi from '../image/taxifront.png';
import { baseUrl, login_url } from '../utils/Url';
import axios from 'axios';
import { toastError, toastWarn } from '../utils/Notifycustom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { formSchema } from '../utils/formValidation';

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: getCookie('rememberedEmail') || '',
        password: getCookie('rememberedPassword') || '',
    });

    const [changePassword, setChangePassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(getCookie('rememberMe') === 'true');

    // Function to get cookie value
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return '';
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    }

    // Function to delete a cookie
    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }

    // Update formData on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle Remember Me toggle
    const handleRememberMe = (e) => {
        const isChecked = e.target.checked;
        setRememberMe(isChecked);

        if (!isChecked) {
            // Delete cookies when "Remember Me" is unchecked
            deleteCookie('rememberedEmail');
            deleteCookie('rememberedPassword');
            deleteCookie('rememberMe');
        }
    };
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email === '') {
            return toastWarn('Please enter email address');
        }
        if (formData.password === '') {
            return toastWarn('Please enter the Password');
        }

        // Validate form data
        const validation = formSchema.safeParse(formData);
        if (!validation.success) {
            const fieldErrors = validation.error.flatten().fieldErrors;
            const errorMessages = Object.values(fieldErrors)
                .flat()
                .join(', ');
            toastError(errorMessages);
            return; // Stop if validation fails
        }

        try {
            const url = `${baseUrl}${login_url}`;
            const loginData = new FormData();
            loginData.append('email', formData.email);
            loginData.append('password', formData.password);

            const config = {
                headers: { 'Content-Type': 'multipart/form-data' },
            };

            // Make API call
            const res = await axios.post(url, loginData, config);
            if (res.status === 200) {
                if (rememberMe) {
                    // Save email and password in cookies for 7 days
                    setCookie('rememberedEmail', formData.email, 7);
                    setCookie('rememberedPassword', formData.password, 7);
                    setCookie('rememberMe', 'true', 7);
                } else {
                    // Delete cookies if "Remember Me" is not checked
                    deleteCookie('rememberedEmail');
                    deleteCookie('rememberedPassword');
                    deleteCookie('rememberMe');
                }
                localStorage.setItem('token', res?.data?.token);
                localStorage.setItem('userId', res.data.user_id);
                setFormData({ email: '', password: '' });
                navigate('/');
                window.location.reload();
            }
        } catch (error) {
            console.log(error?.response?.data, 'error');
            toastError(error?.response?.data?.message || 'Login failed. Please try again.');
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    
    return (
        <div>
            <section className="login_register">
                <div className="container">
                    <div className="row d-flex py-4 justify-content-center align-items-center">
                        <div className="col-lg-6 pe-lg-5 rounded">
                            <form onSubmit={handleSubmit} className="form_box border border-warning ">
                                <div className="row g-3">
                                    <div className="col-12 text-lg-start text-center">
                                        <h2 className="text-center fw-bold login_heading">Log In</h2>
                                    </div>
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                            />
                                            <span>
                                                <FaUser className="usericon" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input
                                                type={changePassword ? 'text' : 'password'}
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                onKeyDown={(e)=>handleKeyDown(e)}
                                                placeholder="Password"
                                            />
                                            <span
                                                onClick={() => setChangePassword(!changePassword)}
                                                className="usericon"
                                            >
                                                {changePassword ? <FaEye className="usericon" /> : <FaEyeSlash className="usericon" />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    id="custom-checkbox"
                                                    className="custom-checkbox"
                                                    onKeyDown={(e)=>handleKeyDown(e)}
                                                    checked={rememberMe}
                                                    onChange={handleRememberMe}
                                                />
                                                <label
                                                    htmlFor="custom-checkbox"
                                                    className="text-warning custom-checkboxlabel mt-1"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>
                                            <Link
                                                to="/reset_password"
                                                className="text-light col-5 custom-checkboxlabel mt-1"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center text-center mt-4">
                                        <button
                                        type='submit'
                                            
                                            className="button_1"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <div className="col-12 text-lg-start text-center d-flex justify-content-center">
                                        <p className="para custom-checkboxlabel mb-0">
                                            Don't have an account?{' '}
                                            <Link to="/registration" className="li_su ms-1">
                                                Register Here
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                            <div className="taxi d-flex justify-content-center align-items-center">
                                <img src={taxi} alt="" className="taxi-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
