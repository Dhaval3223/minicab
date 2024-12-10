import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./css/price.css"

function Price() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const response = await fetch('https://minicab.124124.site/public/api/get-subscriptions');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setSubscriptions(data); // Assuming the API returns the subscriptions list
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscriptions();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log(subscriptions, "subscriptions");

    return (
        <div>
            <section className="content_sec py-5">
                <div className="container">
                    <div className="row g-3 justify-content-center text-center mb-5">
                        <div className="col-12 col-lg-4">
                            <h1 className="main_heading mb-3">
                                Make the wise decision for your business
                            </h1>
                            <p className="para fs-4">
                                Choose from our affordable 3 packages
                            </p>
                        </div>
                    </div>
                    <OwlCarousel
                        className="owl-theme"
                        loop={true}
                        margin={30}
                        autoplay={true}
                        autoplayTimeout={3000}
                        autoplaySpeed={2000}
                        items={1}
                        dots={false}
                        nav={false}
                        autoplayHoverPause={true} // Pause sliding on hover
                        responsive={{
                            0: { items: 1 },
                            600: { items: 2 },
                            1000: { items: 3 }
                        }}
                    >
                        {subscriptions?.data?.map((item, index) => (
                            <div
                                className={`d-flex flex-column position-relative ${item.subscription_type} carousel-item`}
                                key={index}
                            >
                                <div
                                    className="bg-dark text-white p-4 rounded w-100 d-flex flex-column justify-content-between"
                                    style={{
                                        height: "100%",
                                    }}
                                >
                                    <div className="pricing_header">
                                        <p
                                            className="bg_yellow px-3 py-1 fs_12 fw_600 mb-2"
                                            style={{ width: "max-content", borderRadius: 15 }}
                                        >
                                            {item.discount_status === 1 ? "Discounted" : "Popular"}
                                        </p>
                                        <h5 className="fw_700 mb-3">{item.validity_period} days</h5>
                                        {item.discount_status === 1 ? (
                                            <h4 className="price1 text-white mb-0">
                                                <strike>£{item.package_price}</strike>£
                                                {item.discount_type === "percentage"
                                                    ? (
                                                        item.package_price -
                                                        (item.package_price * item.discount_percentage) / 100
                                                    ).toFixed(2)
                                                    : (item.package_price - item.discount_price).toFixed(2)}{" "}
                                                + <span className="small fs-6">VAT</span>
                                            </h4>
                                        ) : (
                                            <h4 className="price1 text-white mb-0">
                                                £{item.package_price} + VAT
                                            </h4>
                                        )}
                                        <p className="text-white fs_14">{item.validity_period} days</p>
                                        <p className="text-white fs_14">{item.package_heading}</p>
                                        <h6 className="fw_700 text-white mt-2">What's included:</h6>
                                        <ul className="fs_15">
                                            <li className="mb-2">{item.content}</li>
                                            {item.successor && (
                                                <li className="mb-2">
                                                    {item.successor.package_price} + VAT
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    <button
                                        className="btn btn-warning w-100 text-center mt-auto"
                                        style={{
                                            marginTop: "auto",
                                        }}
                                    >
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        ))}

                    </OwlCarousel>
                </div>
            </section>
        </div>
    );
}

export default Price;
