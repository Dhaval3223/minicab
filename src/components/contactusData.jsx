import React, { useState } from 'react';
import { getmethodData } from '../utils/Api';
import { useQuery } from 'react-query';
import { countryCodes } from '../utils/countryCodes';

const ContactUsData = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        countryCode: countryCodes[0]?.code || '', // Default to the first country code
        phoneNumber: '',
        message: '',
    });

    const { data, isLoading, error } = useQuery(
        "ContactUsData",
        () => getmethodData("https://124124.site/minicab/public/api/get-contact-us-data"),
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;

        // Restrict `mobileNumber` and `phoneNumber` to numeric input with a max length of 10
        if (['phoneNumber'].includes(name)) {
            // Only allow digits and enforce a maximum of 10 characters
            if (/^\d{0,12}$/.test(value)) {
                updatedValue = value;
            } else {
                return; // Exit if validation fails
            }
        }
        if (['fullName', 'companyName'].includes(name)) {
            // Allow only alphabetic characters (including spaces)
            if (/^[a-zA-Z\s]*$/.test(value)) {
                updatedValue = value;
            } else {
                return; // Exit if validation fails
            }
        }
        setFormData((prev) => ({ ...prev, [name]: updatedValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://your-api-endpoint.com/contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            const result = await response.json();
            alert("Form submitted successfully!");
            console.log(result);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form.");
        }
    };

    if (isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100%',
                    backgroundColor: '#f8f9fa',
                }}
            >
                <div>Loading...</div>
            </div>
        );
    }

    if (error) return <div>Error loading data</div>;

    return (
        <div className="d-flex flex-wrap flex-column flex-md-row" style={{ padding: '20px' }}>
            <div
                className="order-0 order-md-0"
                style={{ flex: '1', paddingRight: '20px' }}
                dangerouslySetInnerHTML={{ __html: data?.data }}
            />

            <div className="order-1 order-md-1" style={{ flex: '1' }}>
                <section className="content_sec">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <form
                                    className="form_box p-3 m-0 border rounded shadow-sm"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row g-3">
                                        <div className="col-12 text-center mb-3">
                                            <p className="para fs-15 mb-1">
                                                Give us a call or email us anytime. We endeavor to answer all enquiries within 24 hours on business days.
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Full Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                className="form-control"
                                                placeholder="Enter full name"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Company Name</label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                className="form-control"
                                                placeholder="Enter company name"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Email <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Enter email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">
                                                Phone Number <span className="text-danger">*</span>
                                            </label>
                                            <div className="row g-2">
                                                <div className="col-5">
                                                    <select
                                                        name="countryCode"
                                                        className="form-select"
                                                        value={formData.countryCode}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        {countryCodes.map((country) => (
                                                            <option key={country.code} value={country.code}>
                                                                {country.code} ({country.name})
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-7">
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        className="form-control"
                                                        placeholder="Phone Number"
                                                        value={formData.phoneNumber}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">
                                                Message <span className="text-danger">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                placeholder="Write your message"
                                                rows="4"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-4 text-center mt-4 mx-auto">
                                            <button
                                                type="submit"
                                                className="btn w-100 mt-lg-3"
                                                style={{
                                                    backgroundColor: '#FACE2F',
                                                    borderColor: '#FACE2F',
                                                    color: '#000',
                                                }}
                                            >
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
        </div>
    );
};

export default ContactUsData;
