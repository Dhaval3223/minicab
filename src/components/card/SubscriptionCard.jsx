import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap"; // Import Spinner
import axiosInstance from "../../utils/axiosInstance";
import ReusableModal from "../models/WarningModel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SubscriptionCard({ subscription }) {
  const navigate = useNavigate();

  const {
    subscription_type,
    discount_status,
    validity_period,
    package_price,
    discount_type,
    discount_percentage,
    discount_price,
    package_heading,
    content,
    successor,
    id,
  } = subscription || {};

  const discountedPrice =
    discount_status === 1
      ? discount_type === "percentage"
        ? package_price - (package_price * discount_percentage) / 100
        : package_price - discount_price
      : null;

  const [modalData, setModalData] = useState({
    title: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [finalConfirmationModal, setFinalConfirmationModal] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state

  const fetchApiData = async () => {
    setLoading(true); // Set loading to true when API is called
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
      setLoading(false); // Set loading to false once the API call is completed
    }
  };

  const { mutate } = useMutation("fetchModalData", fetchApiData, {
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
      // toast(
      //   error?.response?.data?.message ||
      //     error?.message ||
      //     "something went wrong"
      // );
      setModalData({
        title: "Attention!",
        message: error?.response?.data?.message,
      });
    },
  });

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

  const handleCancel = () => {
    alert("Cancelled!");
    setShowModal(false);
  };

  const handleClose = () => setShowModal(false);
  const handleFinalCancel = () => setFinalConfirmationModal(false);

  return (
    <div
      className={`d-flex flex-column position-relative ${subscription_type} carousel-item`}
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
            {discount_status === 1 ? "Discounted" : "Popular"}
          </p>
          <h5 className="fw_700 mb-3">{validity_period} days</h5>
          <h4 className="price1 text-white mb-0">
            {discount_status === 1 ? (
              <>
                <strike>£{package_price}</strike> £{discountedPrice.toFixed(2)}{" "}
                + <span className="small fs-6">VAT</span>
              </>
            ) : (
              <>£{package_price} + VAT</>
            )}
          </h4>
          <p className="text-white fs_14">{validity_period} days</p>
          <p className="text-white fs_14">{package_heading}</p>
          <h6 className="fw_700 text-white mt-2">What's included:</h6>
          <ul className="fs_15">
            <li className="mb-2">{content}</li>
            {successor && (
              <li className="mb-2">{successor.package_price} + VAT</li>
            )}
          </ul>
        </div>
        <button
          className="btn btn-warning w-100 text-center mt-auto"
          style={{
            marginTop: "auto",
          }}
          onClick={() => {
            const token = localStorage.getItem("token");
            if (!token) {
              navigate("/login");
            } else {
              mutate();
            }
          }}
        >
          {loading ? (
            <Spinner animation="border" size="sm" /> // Show spinner when loading
          ) : (
            "Subscribe Now"
          )}
        </button>

        {/* React Bootstrap Modal */}
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
    </div>
  );
}

SubscriptionCard.propTypes = {
  subscription: PropTypes.shape({
    subscription_type: PropTypes.string.isRequired,
    discount_status: PropTypes.number.isRequired,
    validity_period: PropTypes.number.isRequired,
    package_price: PropTypes.number.isRequired,
    discount_type: PropTypes.string,
    discount_percentage: PropTypes.number,
    discount_price: PropTypes.number,
    package_heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    successor: PropTypes.shape({
      package_price: PropTypes.number,
    }),
  }).isRequired,
};

export default SubscriptionCard;
