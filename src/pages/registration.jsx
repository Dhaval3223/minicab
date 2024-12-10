import React, { useState, useEffect } from 'react';
import Registration_banner from '../components/registration_banner';
import taxi from '../image/taxi2.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { baseUrl, default_token, get_register_terms_data_url, registration_url } from '../utils/Url';
import axios from 'axios';
import { toastError, toastInfo } from '../utils/Notifycustom';
import { useQuery } from 'react-query';
import { getmethodDataWithToken } from '../utils/Api';
import { formSchemaSignup } from '../utils/formValidation';
import { countryCodes } from '../utils/countryCodes';
function Registration() {
    const navigate = useNavigate();
    const terms_condition_url = `${baseUrl}${get_register_terms_data_url}`
    const token = localStorage.getItem('token') || default_token
    const postcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/i;

    const { data: termsConditions, isLoading, error } = useQuery("termsAndconditions", () => getmethodDataWithToken(terms_condition_url, token), {
        enabled: !!token,  // Only fetch if token exists
    });

    // State for form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        countryCode: '+44',
        phoneNumber: '',
        mobileCountryCode: '+44',
        mobileNumber: '',
        billingAddress1: '',
        billingAddress2: '',
        billingAddress3: '',
        city: '',
        postcode: '',
        merchantTerms: 0,
        vendorTerms: 0,
        auctionTerms: 0,
        jobTerms: 0
    });

    const [formErrors, setFormErrors] = useState({});

    // Handle form input changes with validation
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let updatedValue = type === 'checkbox' ? (checked ? 1 : 0) : value;

        // Restrict `mobileNumber` and `phoneNumber` to numeric input with a max length of 10
        if (['mobileNumber', 'phoneNumber'].includes(name)) {
            // Only allow digits and enforce a maximum of 10 characters
            if (/^\d{0,12}$/.test(value)) {
                updatedValue = value;
            } else {
                return; // Exit if validation fails
            }
        }
        if (['firstName', 'lastName', 'companyName', 'city'].includes(name)) {
            // Allow only alphabetic characters (including spaces)
            if (/^[a-zA-Z\s]*$/.test(value)) {
                updatedValue = value;
            } else {
                return; // Exit if validation fails
            }
        }
        // Restrict `postcode` to only digits and spaces
        if (name === 'postcode') {
            // Only allow letters, digits, and spaces, with a maximum length of 10
            if (/^[a-zA-Z\d\s]{0,10}$/.test(value)) {
                updatedValue = value;
            } else {
                return; // Exit if validation fails
            }
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: updatedValue,
        }));

        // Real-time validation of the specific field
        const fieldValidation = formSchemaSignup.pick({ [name]: true }).safeParse({ [name]: updatedValue });
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: fieldValidation.success ? null : fieldValidation.error.flatten().fieldErrors[name]?.[0]
        }));
    };

    // Handle form submission with full validation
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Full form validation
            const validation = formSchemaSignup.safeParse(formData);
            if (!validation.success) {
                const fieldErrors = validation.error.flatten().fieldErrors;
                const errorMessages = Object.values(fieldErrors)
                    .flat()
                    .join(", ");
                toastError(errorMessages);
                return;
            }
            if (!postcodeRegex.test(formData.postcode)) {
                toastInfo('Invalid UK postcode. Please enter a valid one.', 'error');
                return;
            }
            // Prepare form data for submission
            const registrationData = new FormData();
            registrationData.append('l_name', formData.lastName);
            registrationData.append('f_name', formData.firstName);
            registrationData.append('email', formData.email);
            registrationData.append('phone_code', `${formData.countryCode}`);
            registrationData.append('phone', `${formData.phoneNumber}`);
            registrationData.append('mobile_code', `${formData.mobileCountryCode}`);
            registrationData.append('mobile', `${formData.mobileNumber}`);
            registrationData.append('billing_address_1', formData.billingAddress1);
            registrationData.append('billing_address_2', formData.billingAddress2);
            registrationData.append('billing_address_3', formData.billingAddress3);
            registrationData.append('billing_city', formData.city);
            registrationData.append('billing_postcode', formData.postcode);
            registrationData.append('vendor_billing_cycle', 'daily');
            registrationData.append('m_aggrement_acceptance', formData.merchantTerms);
            registrationData.append('v_aggrement_acceptance', formData.vendorTerms);
            registrationData.append('a_aggrement_acceptance', formData.auctionTerms);
            registrationData.append('merchant_status', '1');
            registrationData.append('vendor_status', '1');
            registrationData.append('auction_status', '1');
            registrationData.append('company_name', formData.companyName);

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            };

            // Make POST request
            const res = await axios.post(`${baseUrl}${registration_url}`, registrationData, config);

            if (res.status === 201) {
                // Store token and reset form
                // localStorage.setItem('token', res?.data?.token);
                setFormData({
                    firstName: '',
                    lastName: '',
                    companyName: '',
                    email: '',
                    countryCode: '',
                    phoneNumber: '',
                    mobileCountryCode: '',
                    mobileNumber: '',
                    billingAddress1: '',
                    billingAddress2: '',
                    billingAddress3: '',
                    city: '',
                    postcode: '',
                    merchantTerms: 0,
                    vendorTerms: 0,
                    auctionTerms: 0,
                    jobTerms: 0
                });
                navigate('/Welcome');
            }
        } catch (error) {
            const errorData = error?.response?.data?.message;

            if (errorData && typeof errorData === 'object') {
                // Extract each error message and combine them into a single string
                const errorMessages = Object.values(errorData)
                    .flat()
                    .join(", ");

                toastError(errorMessages);
            } else {
                // Fallback message if errorData is not structured as expected
                const errorMessage = errorData || "An error occurred. Please try again.";
                toastError(errorMessage);
            }

            console.log(error); // Optional: log full error for debugging

        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div>
            <section className="content_sec bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 mb-4 d-flex justify-content-center align-items-center">
                            <img src={taxi} alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <fieldset className="form_box_reg m-0 border border-warning position-relative">
                                <legend className="d-flex justify-content-center lagend ">
                                    <span className=' text-warning bg-dark fs-4 px-5 py-1 border border-warning rounded'>Registration</span>

                                </legend>

                                <form className="col-12 px-lg-5 py-3" onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name *"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name *"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Username *"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div> */}
                                        <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    placeholder="Company Name *"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email *"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <span>
                                                    <FaEye className="usericon" />
                                                </span>
                                            </div>
                                        </div> */}
                                        <div className="col-lg-6 col-md-12">
                                            <div className="row g-2"> {/* Add gutter spacing between columns */}
                                                <div className="col-5"> {/* Automatically adjust width */}
                                                    <div className='input_grp_reg bg-light'>
                                                        <select
                                                            name="countryCode"
                                                            value={formData.countryCode}
                                                            onChange={handleChange}
                                                            className="form-select"
                                                            required
                                                        >
                                                            <option value="" disabled>
                                                                Select Country Code
                                                            </option>
                                                            {countryCodes.map((country) => (
                                                                <option key={country.code} value={country.code}>
                                                                    {country.code} ({country.shortName})
                                                                </option>
                                                            ))}
                                                        </select>


                                                    </div>
                                                </div>
                                                <div className="col-7"> {/* This will take the remaining space */}
                                                    <div className='input_grp_reg'>
                                                        <input
                                                            type="text" // Use text to handle custom validation
                                                            name="phoneNumber"
                                                            placeholder="Phone Number *"
                                                            value={formData.phoneNumber}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <div className="row g-2"> {/* Add gutter spacing between columns */}
                                                <div className="col-5"> {/* Automatically adjust width */}
                                                    <div className='input_grp_reg bg-light'>
                                                        <select
                                                            name="mobileCountryCode"
                                                            value={formData.mobileCountryCode}
                                                            onChange={handleChange}
                                                            className="form-select"
                                                            required
                                                        >
                                                            {countryCodes.map((country) => (
                                                                <option key={country.code} value={country.code} >
                                                                    {country.code} ({country.shortName})
                                                                </option>
                                                            ))}
                                                            {/* Add more country codes as needed */}
                                                        </select>

                                                    </div>
                                                </div>
                                                <div className="col-7"> {/* This will take the remaining space */}
                                                    <div className='input_grp_reg'>
                                                        <input
                                                            type="text"
                                                            name="mobileNumber"
                                                            placeholder="Mobile Number *"
                                                            value={formData.mobileNumber}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="text"
                                                    name="billingAddress1"
                                                    placeholder="Billing Address - Line 1 *"
                                                    value={formData.billingAddress1}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="text"
                                                    name="billingAddress2"
                                                    placeholder="Billing Address - Line 2"
                                                    value={formData.billingAddress2}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="text"
                                                    name="billingAddress3"
                                                    placeholder="Billing Address - Line 3"
                                                    value={formData.billingAddress3}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    placeholder="City *"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="input_grp_reg">
                                                <input
                                                    type="text"
                                                    name="postcode"
                                                    placeholder="Postcode* Eg. SW10 1AA"
                                                    value={formData.postcode}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {/* Checkbox fields for terms and conditions */}
                                        <div className='col-12'>
                                            <div className="col-12 mb-1 mt-4">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="merchantTerms"
                                                        checked={formData.merchantTerms === 1}
                                                        onChange={handleChange}
                                                        required
                                                    />{' '}
                                                    <span className="text-secondary mx-1" style={{ fontSize: '12px' }}>
                                                        Merchant
                                                    </span>
                                                    <a href="#/" className="text-decoration-underline" data-bs-toggle="modal" data-bs-target="#merchantModal">
                                                        Terms and Conditions
                                                    </a>
                                                    <span className="text-danger">*</span>
                                                </label>
                                            </div>
                                            <div className="col-12 my-1">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="vendorTerms"
                                                        checked={formData.vendorTerms === 1}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <span className='text-secondary mx-1' style={{ fontSize: '12px' }}>Vendor</span>
                                                    <a href="#/" className='text-decoration-underline' data-bs-toggle="modal" data-bs-target="#vendorModal">
                                                        Terms and Conditions
                                                    </a>
                                                    <span className='text-danger'>*</span>
                                                </label>
                                            </div>
                                            <div className="col-12 my-1">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="auctionTerms"
                                                        checked={formData.auctionTerms === 1}
                                                        onChange={handleChange}

                                                        required
                                                    />
                                                    <span className='text-secondary mx-1' style={{ fontSize: '12px' }}>Auction</span>
                                                    <a href="#/" className='text-decoration-underline' data-bs-toggle="modal" data-bs-target="#auctionModal">
                                                        Terms and Conditions
                                                    </a>
                                                    <span className='text-danger'>*</span>
                                                </label>
                                            </div>
                                            <div className="col-12 my-1">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="jobTerms"
                                                        checked={formData.jobTerms === 1}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <span className='text-secondary mx-1' style={{ fontSize: '12px' }}>Job</span>
                                                    <a href="#/" className='text-decoration-underline' data-bs-toggle="modal" data-bs-target="#jobModal">
                                                        Terms and Conditions
                                                    </a>
                                                    <span className='text-danger'>*</span>
                                                </label>
                                            </div>


                                        </div>
                                        {/* Add similar checkboxes for Vendor, Auction, and Job terms */}
                                        <div className="col-lg-3 text-center mt-4 mx-auto">
                                            <button
                                                type="submit"
                                                className="bg-warning rounded-pill px-4 py-2 fw-bolder text-dark text-center w-100"
                                            >
                                                SignUp
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </section>
            {/* modals */}
            {/* Merchant Terms Modal */}
            <div className="modal fade" id="merchantModal" tabIndex="-1" aria-labelledby="merchantModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h5 className="modal-title" id="merchantModalLabel">Merchant Terms and Conditions</h5>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                            <div
                                dangerouslySetInnerHTML={{ __html: termsConditions?.data?.value?.merchant_terms }}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ok</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vendor Terms Modal */}
            <div className="modal fade" id="vendorModal" tabIndex="-1" aria-labelledby="vendorModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="vendorModalLabel">Vendor Terms and Conditions</h5>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                            <div
                                dangerouslySetInnerHTML={{ __html: termsConditions?.data?.value?.vendor_terms }}
                            />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ok</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Auction Terms Modal */}
            <div className="modal fade" id="auctionModal" tabIndex="-1" aria-labelledby="auctionModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="auctionModalLabel">Auction Terms and Conditions</h5>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                            <div
                                dangerouslySetInnerHTML={{ __html: termsConditions?.data?.value?.auction_terms }}
                            />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ok</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Terms Modal */}
            <div className="modal fade" id="jobModal" tabIndex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="jobModalLabel">Job Terms and Conditions</h5>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body" >
                            <div
                                dangerouslySetInnerHTML={{ __html: termsConditions?.data?.value?.job_terms }}
                            />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
