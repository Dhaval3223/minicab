import React from "react";
import { Modal, Button } from "react-bootstrap";

const ReusableModal = ({
  title,
  message,
  onConfirm,
  onCancel,
  showModal,
  handleClose,
}) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div className="text-warning fs-1">
          <i className="bi bi-exclamation-circle"></i>
        </div>
        <p className="mt-3">{message}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="primary" onClick={onConfirm}>
          Okay!
        </Button>
        <Button variant="danger" onClick={onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReusableModal;
