import React, { useState } from "react";
import { Tabs, Tab, Container, Spinner, Alert } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useTransactions } from "../hooks/useTransactions";
import "bootstrap/dist/css/bootstrap.min.css";
import TransfersAndReports from "../components/TransfersAndReports";

const TabExample = () => {
  const [activeTab, setActiveTab] = useState("wallet");
  const { data, isLoading, isError } = useTransactions(activeTab);

  const columns = [
    {
      name: "Transaction ID",
      selector: (row) => row.transaction_id || "N/A",
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description || "N/A",
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount || "N/A",
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date || "N/A",
      sortable: true,
    },
  ];

  const renderTabContent = () => {
    if (activeTab === "transfersReports") {
      return <TransfersAndReports />;
    }

    return isLoading ? (
      <Spinner animation="border" />
    ) : isError ? (
      <Alert variant="danger">Failed to load transactions.</Alert>
    ) : (
      <DataTable
        title="Transaction List"
        columns={columns}
        data={data?.transactions || []}
        pagination
        highlightOnHover
        pointerOnHover
        responsive
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search Transactions"
            className="form-control"
            onChange={(e) => console.log(e.target.value)} // Optional: Implement custom filtering
          />
        }
      />
    );
  };

  return (
    <Container className="mt-4">
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        id="tab-example"
        className="mb-3 overflow-auto flex-nowrap d-flex"
        style={{ whiteSpace: "nowrap" }}
      >
        <Tab eventKey="wallet" title="Wallet">
          <h4>Wallet Transactions</h4>
        </Tab>
        <Tab eventKey="credit" title="Credit">
          <h4>Credit Transactions</h4>
        </Tab>
        <Tab eventKey="online" title="Online">
          <h4>Online Transactions</h4>
        </Tab>
        <Tab eventKey="fundTransfer" title="Fund Transfer">
          <h4>Fund Transfer Transactions</h4>
        </Tab>
        <Tab eventKey="deposit" title="Deposit">
          <h4>Deposit Transactions</h4>
        </Tab>
        <Tab eventKey="transfersReports" title="Transfers & Reports">
          <h4>Transfers & Reports</h4>
        </Tab>
      </Tabs>
      {renderTabContent()}
    </Container>
  );
};

export default TabExample;
