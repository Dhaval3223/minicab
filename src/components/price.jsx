import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./css/price.css";
import SubscriptionCard from "./card/SubscriptionCard";

function Price() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(
          "https://minicab.124124.site/public/api/get-subscriptions"
        );
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

  return (
    <div>
      <section className="content_sec py-5">
        <div className="container">
          <div className="row g-3 justify-content-center text-center mb-5">
            <div className="col-12 col-lg-4">
              <h1 className="main_heading mb-3">
                Make the wise decision for your business
              </h1>
              <p className="para fs-4">Choose from our affordable 3 packages</p>
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
            autoplayHoverPause={true}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 3 },
            }}
          >
            {subscriptions?.data?.map((item, index) => (
              <SubscriptionCard key={index} subscription={item} />
            ))}
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}

export default Price;
