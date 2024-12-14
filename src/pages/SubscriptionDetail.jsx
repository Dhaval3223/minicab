import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getDataWithToken, getmethodDataWithToken } from "../utils/Api";
import {
  baseUrl,
  get_add_subscription_to_basket_url,
  get_subscription_agreement_url,
  get_user_jobs_in_basket_url,
  get_user_next_subscription_list_url,
  get_user_subscription_history_list_url,
  get_user_subscriptions_in_basket_url,
  get_user_validate_subscription_url,
} from "../utils/Url";
import SubscriptionHistoryTable from "../components/SubscriptionTable";
import SubscriptionCard from "../components/card/SubscriptionCard";

const SubscriptionPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  // const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subscriptionType, setSubscriptionType] = useState();
  const token = localStorage.getItem("token");
  const subscriptionHistoryUrl = `${baseUrl}${get_user_subscription_history_list_url}`;
  const user_jobs_in_basket_url = `${baseUrl}${get_user_jobs_in_basket_url}`;
  const user_subscriptions_in_basket_url = `${baseUrl}${get_user_subscriptions_in_basket_url}`;
  const subscription_agreement_url = `${baseUrl}${get_subscription_agreement_url}`;
  const add_subscription_to_basket_url = `${baseUrl}${get_add_subscription_to_basket_url}`;
  const user_validate_subscription_url = `${baseUrl}${get_user_validate_subscription_url}`;
  const user_next_subscription_list_url = `${baseUrl}${get_user_next_subscription_list_url}`;

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

  const filteredSubscriptions =
    subscriptions?.data?.length > 0
      ? subscriptionType
        ? subscriptions.data.filter(
            (subscription) =>
              subscription.subscription_type === subscriptionType
          )
        : subscriptions.data // If subscriptionType is null, return all
      : subscriptions?.data;

  console.log(filteredSubscriptions, "subscriptionHistory", subscriptions);

  return (
    <div className="container-fluid p-4">
      {/* Page Header */}
      {/* <div className="row mb-4">
        <div className="col">
          <h4 className="text-muted">Merchant Settings / Subscription</h4>
        </div>
      </div> */}

      <div className="row">
        {/* Current Subscription */}
        <div className="col-md-4 mb-4">
          <h5 className="card-title mb-2">Current Subscription</h5>
          <div className="card shadow bg-dark text-light">
            <div className="card-body">
              <p className="fw-bold fs-4">45 days left</p>
              <h2 className="fw-bold text-primary">£1283.24</h2>
              <p className="text-muted">10/09/2024 18:49 - 11/09/2025 18:49</p>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="autoRenew"
                />
                <label className="form-check-label" htmlFor="autoRenew">
                  Auto Renew
                </label>
              </div>
              <div className="d-flex">
                <button className="btn btn-success me-2">Renew</button>
                <button className="btn btn-warning me-2">Freeze</button>
                <button className="btn btn-danger">Terminate</button>
              </div>
            </div>
          </div>
        </div>

        {/* Next Subscription */}
        <div className="col-md-8 mb-4">
          <div className="card shadow mb-4">
            <div className="card-body">
              <h5 className="card-title">Next Subscription</h5>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Package Name</th>
                      <th>Final Amount</th>
                      <th>Validity Period</th>
                      <th>Status</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" className="text-center text-muted">
                        No data available in table
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="card shadow">
            <SubscriptionHistoryTable />
          </div>
        </div>
      </div>

      {/* Choose Your Subscription */}
      <div className="row mt-4">
        <div className="col">
          <h5 className="mb-4">Choose your Subscription</h5>
          <button
            className="btn btn-secondary"
            onClick={() => setSubscriptionType("trial")}
          >
            Trial
          </button>
          <button
            className="btn btn-warning mx-2"
            onClick={() => setSubscriptionType("paid")}
          >
            Paid
          </button>
          {/* <button className='btn btn-info' onClick={() => setSubscriptionType('free')}>Free</button> */}
          <div className="row">
            {(filteredSubscriptions || subscriptions?.data)?.map(
              (item, index) => (
                <div className="col-md-4 mb-4 d-flex" key={index}>
                  <div
                    className={`cmnSubDiv ${item.subscription_type} w-100`}
                    style={{
                      display: "flex",
                      flexDirection: "column", // Ensure inner content aligns properly
                      justifyContent: "space-between", // Space between header and footer
                      padding: "15px",
                    }}
                  >
                    <SubscriptionCard key={index} subscription={item} />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
