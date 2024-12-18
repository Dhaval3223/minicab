import React, { useState, useEffect } from "react";
import { Tabs, Tab, Container, Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import useVendorBillClaimReport from "../hooks/useVendorBillClaimReport"; // Custom hook for Vendor Bill Claim
import useMerchantRefundReport from "../hooks/useMerchantRefundReport"; // Custom hook for Merchant Refund
import "bootstrap/dist/css/bootstrap.min.css";

const ReportTabs = () => {
  const [activeTab, setActiveTab] = useState("vendorBillClaim");
  const [tableData, setTableData] = useState([]);
  const [queryParams, setQueryParams] = useState({
    draw: 1,
    start: 0,
    length: 10,
    order: [{ column: 3, dir: "desc" }], // default sorting
    search: { value: "", regex: false },
    columns: Array(11).fill({
      searchable: true,
      orderable: false,
      search: { value: "", regex: false },
    }),
  });

  const {
    data: vendorBillClaimData,
    isLoading: isVendorLoading,
    isError: isVendorError,
  } = useVendorBillClaimReport(queryParams);

  const {
    data: merchantRefundData,
    isLoading: isMerchantLoading,
    isError: isMerchantError,
  } = useMerchantRefundReport(queryParams);

  useEffect(() => {
    if (activeTab === "vendorBillClaim") {
      setTableData(vendorBillClaimData?.data || []);
    } else if (activeTab === "merchantRefund") {
      setTableData(merchantRefundData?.data || []);
    }
  }, [activeTab, vendorBillClaimData, merchantRefundData]);

  const handleTableChange = (action, tableState) => {
    if (action === "pagination") {
      setQueryParams((prev) => ({
        ...prev,
        start: (tableState.page - 1) * tableState.rowsPerPage,
        length: tableState.rowsPerPage,
      }));
    } else if (action === "sort" && tableState.sortedColumn.sortField) {
      setQueryParams((prev) => ({
        ...prev,
        order: [
          {
            column: tableState.sortedColumn.sortField,
            dir: tableState.sortedColumn.sortDirection,
          },
        ],
      }));
    } else if (action === "search") {
      setQueryParams((prev) => ({
        ...prev,
        search: { value: tableState.searchText, regex: false },
      }));
    }
  };

  const columnsForVendor = [
    { name: "Job ID", selector: (row) => row.job_id, sortable: true },
    {
      name: "Journey Info",
      selector: (row) => row.journey_info,
      sortable: true,
    },
    {
      name: "Journey Date & Time",
      selector: (row) => row.journey_datetime,
      sortable: true,
    },
    { name: "Job Status", selector: (row) => row.job_status, sortable: true },
    { name: "Amount", selector: (row) => row.amount, sortable: true },
    {
      name: "Bill Reference",
      selector: (row) => row.bill_reference,
      sortable: true,
    },
    {
      name: "Settlement Date",
      selector: (row) => row.settlement_date,
      sortable: true,
    },
    {
      name: "Payment Reference",
      selector: (row) => row.payment_reference,
      sortable: true,
    },
    { name: "Status", selector: (row) => row.status, sortable: true },
    { name: "Method", selector: (row) => row.method, sortable: true },
    {
      name: "Action",
      selector: (row) => <button className="btn btn-primary">Action</button>,
      sortable: false,
    },
  ];

  const columnsForMerchant = [
    { name: "Job ID", selector: (row) => row.job_id, sortable: true },
    {
      name: "Journey Info",
      selector: (row) => row.journey_info,
      sortable: true,
    },
    {
      name: "Journey Date & Time",
      selector: (row) => row.journey_datetime,
      sortable: true,
    },
    { name: "Job Status", selector: (row) => row.job_status, sortable: true },
    { name: "Amount", selector: (row) => row.amount, sortable: true },
    {
      name: "Reference ID",
      selector: (row) => row.reference_id,
      sortable: true,
    },
    {
      name: "Settlement Date",
      selector: (row) => row.settlement_date,
      sortable: true,
    },
    {
      name: "Payment Reference",
      selector: (row) => row.payment_reference,
      sortable: true,
    },
    { name: "Status", selector: (row) => row.status, sortable: true },
    { name: "Method", selector: (row) => row.method, sortable: true },
    {
      name: "Action",
      selector: (row) => <button className="btn btn-primary">Action</button>,
      sortable: false,
    },
  ];

  const renderTabContent = () => {
    if (activeTab === "vendorBillClaim") {
      if (isVendorLoading) {
        return <Spinner animation="border" />;
      }
      if (isVendorError) {
        return <p>Error loading Vendor Bill Claim data.</p>;
      }
      return (
        <DataTable
          title="Vendor Bill Claim Report"
          columns={columnsForVendor}
          data={tableData || []}
          pagination
          paginationServer
          paginationTotalRows={vendorBillClaimData?.totalRecords || 0}
          onChangePage={(page) => handleTableChange("pagination", { page })}
          onChangeRowsPerPage={(rowsPerPage) =>
            handleTableChange("pagination", { page: 1, rowsPerPage })
          }
          onSort={(column, sortDirection) =>
            handleTableChange("sort", {
              sortedColumn: { sortField: column.selector, sortDirection },
            })
          }
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search Vendor Bill Claims"
              className="form-control"
              onChange={(e) =>
                handleTableChange("search", { searchText: e.target.value })
              }
            />
          }
        />
      );
    }

    if (activeTab === "merchantRefund") {
      if (isMerchantLoading) {
        return <Spinner animation="border" />;
      }
      if (isMerchantError) {
        return <p>Error loading Merchant Refund data.</p>;
      }
      return (
        <DataTable
          title="Merchant Refund Report"
          columns={columnsForMerchant}
          data={tableData || []}
          pagination
          paginationServer
          paginationTotalRows={merchantRefundData?.totalRecords || 0}
          onChangePage={(page) => handleTableChange("pagination", { page })}
          onChangeRowsPerPage={(rowsPerPage) =>
            handleTableChange("pagination", { page: 1, rowsPerPage })
          }
          onSort={(column, sortDirection) =>
            handleTableChange("sort", {
              sortedColumn: { sortField: column.selector, sortDirection },
            })
          }
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search Merchant Refunds"
              className="form-control"
              onChange={(e) =>
                handleTableChange("search", { searchText: e.target.value })
              }
            />
          }
        />
      );
    }
  };

  return (
    <Container className="mt-4">
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => {
          setActiveTab(k);
          setQueryParams((prev) => ({
            ...prev,
            start: 0,
            order: prev.order.length
              ? prev.order
              : [{ column: 3, dir: "desc" }],
          }));
        }}
        id="report-tab-example"
        className="mb-3 overflow-auto flex-nowrap d-flex"
        style={{ whiteSpace: "nowrap" }}
      >
        <Tab eventKey="vendorBillClaim" title="Vendor Bill Claim Report">
          <h4>Vendor Bill Claim Report</h4>
        </Tab>
        <Tab eventKey="merchantRefund" title="Merchant Refund Report">
          <h4>Merchant Refund Report</h4>
        </Tab>
      </Tabs>
      {renderTabContent()}
    </Container>
  );
};

export default ReportTabs;
