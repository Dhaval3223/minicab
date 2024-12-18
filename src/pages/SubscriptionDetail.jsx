import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
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
import { useUserActiveSubscription } from "../hooks/useUserActiveSubscription";
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  Placeholder,
  Row,
} from "react-bootstrap";
import { useTerminateSubscription } from "../hooks/useTerminateSubscription";
import { toast } from "react-toastify";
import {
  useCancelSubscription,
  useFreezeSubscription,
} from "../hooks/useSubscriptionActions";
import axiosInstance from "../utils/axiosInstance";
import ReusableModal from "../components/models/WarningModel";

const Chip = ({ name, isActive }) => {
  return (
    <Badge
      pill
      bg={isActive ? "primary" : "secondary"} // Change color based on active state
      className="px-3 py-2" // Add padding for chip-like appearance
      style={{
        cursor: "pointer",
      }}
    >
      {name}
    </Badge>
  );
};

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

  const {
    data: userActiveSubscription,
    isLoading: isLoadinUserActiveSubscription,
    refetch: refetchUserActiveSubscriptionApi,
  } = useUserActiveSubscription();

  const { mutate: freeze, isLoading: isFreezing } = useFreezeSubscription();
  const { mutate: cancel, isLoading: isCanceling } = useCancelSubscription();
  const { mutate: terminate, isLoading: isTerminating } =
    useTerminateSubscription();

  const handleAction = (actionType) => {
    const payload = { userId: 123 }; // Example payload, adjust as needed

    if (actionType === "freeze") {
      freeze(payload, {
        onSuccess: (data) => console.log("Freeze Success:", data),
        onError: (error) => toast.error(error?.response?.data?.message),
      });
    } else if (actionType === "cancel") {
      cancel(payload, {
        onSuccess: (data) => console.log("Cancel Success:", data),
        onError: (error) => toast.error(error?.response?.data?.message),
      });
    } else if (actionType === "terminate") {
      terminate(payload, {
        onSuccess: (data) => console.log("Terminate Success:", data),
        onError: (error) => toast.error(error?.response?.data?.message),
      });
    }
  };

  console.log("userActiveSubscription", userActiveSubscription);

  const { mutate, isLoading: isLoadingMutation } = useTerminateSubscription();

  const {
    subscription_status,
    days_left,
    package_name,
    final_amount,
    package_heading,
    start_date,
    end_date,
    freeze_start_date,
    freeze_end_date,
    is_auto_renew,
    subscription_id,
    subscription_type,
    show_to_merchant,
    show_to_vendor,
    id,
  } = userActiveSubscription?.data || {};

  const [modalData, setModalData] = useState({
    title: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [finalConfirmationModal, setFinalConfirmationModal] = useState(false);
  const [isFetchingSubscription, setIsFetchingSubscription] = useState(false); // Track loading state

  const fetchApiData = async () => {
    setIsFetchingSubscription(true); // Set to true when API is called
    try {
      const response = await axiosInstance.get(
        `/user-validate-subscription?sub_id=${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch API");
      }
      return response.json();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
      throw new Error("API Error");
    } finally {
      setIsFetchingSubscription(false); // Set to false once the API call is completed
    }
  };

  const { mutate: dataMutation, isLoading } = useMutation(
    "fetchModalData",
    fetchApiData,
    {
      onSuccess: (data) => {
        if (data.type === "success") {
          setModalData({
            title: "Attention!",
            message: data.message,
          });
          setShowModal(true);
        }
      },
      onError: (error) => {
        console.error("API Error:", error);
        setModalData({
          title: "Attention!",
          message: error?.response?.data?.message,
        });
      },
    }
  );

  const handleConfirm = async () => {
    try {
      setShowModal(false);
      const response = await axiosInstance.get("/get-subscription-agreement");
      if (response.data.type === "success") {
        setModalData({
          title: "Subscription Agreement",
          message: response.data.message,
        });
        setFinalConfirmationModal(true);
      } else {
        alert("Failed to fetch the subscription agreement.");
      }
    } catch (error) {
      console.error("Error fetching subscription agreement:", error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    }
  };

  const handleFinalConfirm = async () => {
    try {
      const response = await axiosInstance.get(
        `/add-subscription-to-basket?sub_id=${id}`
      );
      alert("Subscription added to basket.");
      setFinalConfirmationModal(false);
    } catch (error) {
      console.error("Error adding subscription to basket:", error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    }
  };

  const handleClose = () => setShowModal(false);
  const handleFinalCancel = () => setFinalConfirmationModal(false);

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
        {isLoadinUserActiveSubscription ? (
          <div className="col-md-4 mb-4">
            <h5 className="card-title mb-2">
              <Placeholder as="span" animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </h5>
            <Card className="shadow bg-dark text-light">
              <Card.Body>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={4} className="fw-bold fs-4" />
                </Placeholder>
                <Placeholder as="h2" animation="glow">
                  <Placeholder xs={5} className="fw-bold text-primary" />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={8} />
                </Placeholder>
                <Form.Check
                  type="checkbox"
                  id="autoRenewSkeleton"
                  disabled
                  label={
                    <Placeholder as="span" animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                  }
                />
                <div className="d-flex mt-3">
                  {[1, 2, 3].map((key) => (
                    <Button
                      key={key}
                      variant="secondary"
                      disabled
                      className="me-2"
                    >
                      <Placeholder as="span" animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <div className="col-md-4 mb-4">
            <h5 className="card-title mb-2">Current Subscription</h5>
            <div className="card shadow bg-dark text-light">
              <div className="card-body">
                <p className="fw-bold fs-4">{days_left} days left</p>
                <p className="fw-bold fs-4">{package_name}</p>
                <h2 className="fw-bold text-primary mb-3">{final_amount}</h2>
                <p className="">
                  {start_date} - {end_date}
                </p>
                <p className="">Fronzen date - Unfrozen date</p>
                <p className="">
                  {freeze_start_date} - {freeze_end_date}
                </p>
                <div className="d-flex justify-content-between mb-3">
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="autoRenew"
                      checked={is_auto_renew}
                      onChange={(e) =>
                        mutate(!is_auto_renew, {
                          onSuccess: (data) => {
                            refetchUserActiveSubscriptionApi();
                            toast.success(data?.response?.data?.message);
                          },
                          onError: (error) => {
                            toast.error(error?.response?.data?.message);
                          },
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="autoRenew">
                      Auto Renew
                    </label>
                  </div>
                  <Badge
                    pill
                    bg="primary" // Change color based on active state
                    className="p-3" // Add padding for chip-like appearance
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {subscription_status}
                  </Badge>
                </div>
                <Row className="mb-2">
                  <Col xs={6} className="d-flex justify-content-end pe-1">
                    <Button
                      variant="success"
                      className="w-100"
                      disabled={isLoadingMutation}
                      onClick={() => dataMutation()}
                    >
                      Renew
                    </Button>
                  </Col>
                  <Col xs={6} className="d-flex justify-content-start ps-1">
                    <Button
                      variant="info"
                      className="w-100"
                      onClick={() => handleAction("freeze")}
                      disabled={isFreezing}
                    >
                      Freeze
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className="d-flex justify-content-end pe-1">
                    <Button
                      variant="warning"
                      className="w-100"
                      onClick={() => handleAction("cancel")}
                      disabled={isCanceling}
                    >
                      Cancel
                    </Button>
                  </Col>
                  <Col
                    xs={6}
                    className="d-flex justify-content-start ps-1"
                    onClick={() => handleAction("terminate")}
                    disabled={isTerminating}
                  >
                    <Button variant="danger" className="w-100">
                      Terminate
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        )}

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
      <ReusableModal
        title={modalData.title}
        message={modalData.message}
        showModal={showModal}
        handleClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleClose}
      />

      {/* Final Confirmation Modal */}
      <ReusableModal
        title="Agreement"
        message={modalData.message}
        showModal={finalConfirmationModal}
        handleClose={handleFinalCancel}
        onConfirm={handleFinalConfirm}
        onCancel={handleFinalCancel}
      />
    </div>
  );
};

export default SubscriptionPage;
