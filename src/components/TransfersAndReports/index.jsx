import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Alert,
  Spinner,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { useFetchBalance } from "../../hooks/useFetchBalance"; // Importing the custom hook for balance fetching
import "bootstrap/dist/css/bootstrap.min.css";
import "./TransfersAndReports.css"; // Optional custom styling

const TransfersAndReports = () => {
  const [payTo, setPayTo] = useState("deposit");
  const [payFrom, setPayFrom] = useState("");
  const [payFromAmount, setPayFromAmount] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Using the common React Query hook to fetch balance for Pay To
  const {
    data: payToBalance,
    isLoading: isPayToLoading,
    isError: isPayToError,
    error: payToError,
  } = useFetchBalance(payTo);

  // Fetching balance for Pay From using the same common hook
  const {
    data: payFromBalance,
    isLoading: isPayFromLoading,
    isError: isPayFromError,
  } = useFetchBalance(payFrom);

  // Disable Pay From options if it matches Pay To
  const payFromOptions = ["wallet", "online", "transfers"].filter(
    (option) => option !== payTo
  );

  // Handle form submission
  const handleTransfer = () => {
    setShowModal(true); // Show the confirmation modal
  };

  const confirmTransfer = () => {
    alert(`Transferring from ${payFrom} to ${payTo}. Amount: ${payFromAmount}`);
    setShowModal(false); // Close the modal after confirmation
  };

  const cancelTransfer = () => {
    setShowModal(false); // Close the modal without any action
  };

  return (
    <Container className="mt-4 mb-4">
      <h4 className="text-center mb-4">Transfer Form</h4>
      <Row>
        <Col md={6} className="mx-auto">
          <Form className="transfer-form">
            {/* Pay To Section */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="payTo">
                  <Form.Label>Pay To</Form.Label>
                  <Form.Control
                    as="select"
                    value={payTo}
                    onChange={(e) => setPayTo(e.target.value)}
                  >
                    <option value="deposit">Deposit Account</option>
                    <option value="wallet">Wallet</option>
                    <option value="credit">Credit</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="payToBalance">
                  <Form.Label>Pay To Balance</Form.Label>
                  {isPayToLoading ? (
                    <Spinner animation="border" className="d-block mx-auto" />
                  ) : isPayToError ? (
                    <Alert variant="danger">{payToError.message}</Alert>
                  ) : (
                    <Form.Control
                      type="text"
                      value={payToBalance || "N/A"}
                      readOnly
                      disabled
                    />
                  )}
                </Form.Group>
              </Col>
            </Row>

            {/* Pay From Section */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="payFrom">
                  <Form.Label>Pay From</Form.Label>
                  <Form.Control
                    as="select"
                    value={payFrom}
                    onChange={(e) => {
                      setPayFrom(e.target.value);
                      setPayFromAmount(""); // Reset amount when Pay From changes
                    }}
                  >
                    <option value="">Select a method</option>
                    {payFromOptions.map((option) => (
                      <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="payFromAmount">
                  <Form.Label>Pay From Amount</Form.Label>
                  <Form.Control
                    type="number"
                    value={payFromAmount || ""}
                    onChange={(e) => setPayFromAmount(e.target.value)}
                    placeholder="Enter amount"
                    disabled={isPayToLoading || !payFrom} // Disable input during loading or if Pay From is not selected
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Submit Button */}
            <Button
              variant="primary"
              onClick={handleTransfer}
              disabled={
                !payFrom || !payFromAmount || isPayToLoading || isPayToError
              }
              className="w-100 mt-3"
              style={{ backgroundColor: "#FACE2F", color: "black" }}
            >
              Transfer
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={cancelTransfer}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to transfer the amount from {payFrom} to{" "}
            {payTo}?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelTransfer}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmTransfer}>
            Yes, Transfer it
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TransfersAndReports;
