import React, { useState, useEffect } from "react";
import { Tabs, Tab, Container, Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import useUserTransactionList from "../hooks/useTransactions";
import "bootstrap/dist/css/bootstrap.min.css";
import TransfersAndReports from "../components/TransfersAndReports";

function convertData(input) {
  return input?.map((item) => [
    <div key={item[0]}>
      <h6 className="mb-0">{item[0]}</h6>
    </div>, // Subscription Name
    <div key={item[0]}>
      <h6 className="mb-0">{item[1]}</h6>
    </div>, // Amount Paid
    <div key={item[0]}>
      <h6 className="mb-0">{item[2]}</h6>
    </div>, // Status (Example 0)
    <div key={item[0]}>
      <h6 className="mb-0">{item[3]}</h6>
    </div>, // Date
    <div key={item[0]}>
      <h6 className="mb-0">{item[3]}</h6>
    </div>, // Date
    <div key={item[0]}>
      <h6 className="mb-0">{item[4]}</h6>
    </div>, // Date
  ]);
}

const TabExample = () => {
  const [activeTab, setActiveTab] = useState("wallet");
  const [tableData, setTableData] = useState([]);
  const [queryParams, setQueryParams] = useState({
    transaction_mode: "wallet",
    start: 0,
    length: 10,
    order: [{ column: 0, dir: "asc" }], // Ensure this is always set
    search: { value: "", regex: false },
  });

  console.log("queryParams", queryParams);

  const { data, isLoading, isError } = useUserTransactionList({
    transaction_mode: queryParams.transaction_mode,
    draw: 1,
    start: queryParams.start,
    length: queryParams.length,
    search: queryParams.search,
    ...queryParams.order.reduce(
      (acc, item, index) => ({
        ...acc,
        [`order[${index}][column]`]: item.column,
        [`order[${index}][dir]`]: item.dir,
      }),
      {}
    ),
    ...Array.from({ length: 6 }).reduce(
      (acc, _, index) => ({
        ...acc,
        [`columns[${index}][data]`]: index,
        [`columns[${index}][searchable]`]: true,
        [`columns[${index}][orderable]`]: true,
        [`columns[${index}][search][value]`]: "",
        [`columns[${index}][search][regex]`]: false,
      }),
      {}
    ),
  });

  useEffect(() => {
    const transformedData = data?.data?.data?.map((row) => ({
      transaction_id: row[0], // HTML-wrapped content for Column 1
      Date: row[1], // HTML-wrapped content for Column 2
      description: row[2], // HTML-wrapped content for Column 3
      credit: row[3], // HTML-wrapped content for Column 4
      Debit: row[4], // HTML-wrapped content for Date
      Balance: row[5], // HTML-wrapped content for Date
    }));
    setTableData(transformedData);
  }, [data]);

  console.log("data", data?.data?.data);

  const handleTableChange = (action, tableState) => {
    console.log("handleTableChange", action, tableState);
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

  const columns = [
    {
      name: "Transaction ID",
      selector: (row) => {
        console.log("row", row);
        return row.transaction_id;
      },
      sortable: true,
      sortField: 0,
    },
    {
      name: "Date",
      selector: (row) => row.Date,
      sortable: true,
      sortField: 1,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      sortField: 2,
    },
    {
      name: "Credit",
      selector: (row) => row.credit,
      sortable: true,
      sortField: 3,
    },
    {
      name: "Debit",
      selector: (row) => row.Debit,
      sortable: true,
      sortField: 4,
    },
    {
      name: "Balance",
      selector: (row) => row.Balance,
      sortable: true,
      sortField: 4,
    },
  ];

  const renderTabContent = () => {
    if (activeTab === "transfersReports") {
      return <TransfersAndReports />;
    }
    if (isLoading) {
      return <Spinner animation="border" />;
    }

    if (isError) {
      return <p>Error loading data.</p>;
    }

    return (
      <DataTable
        title="Transaction List"
        columns={columns}
        data={tableData || []}
        pagination
        paginationServer
        paginationTotalRows={data?.data?.recordsTotal || 0}
        onChangePage={(page) => handleTableChange("pagination", { page })}
        onChangeRowsPerPage={(rowsPerPage) =>
          handleTableChange("pagination", { page: 1, rowsPerPage })
        }
        onSort={(column, sortDirection) =>
          handleTableChange("sort", {
            sortedColumn: { sortField: column.sortField, sortDirection },
          })
        }
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search Transactions"
            className="form-control"
            onChange={(e) =>
              handleTableChange("search", { searchText: e.target.value })
            }
          />
        }
      />
    );
  };

  // useEffect(() => {
  //   // Ensure the order is always set when the tab or queryParams change
  //   setQueryParams((prev) => ({
  //     ...prev,
  //     order: prev.order.length ? prev.order : [{ column: 0, dir: "asc" }],
  //   }));
  // }, [queryParams.transaction_mode]);

  return (
    <Container className="mt-4">
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => {
          setActiveTab(k);
          setQueryParams((prev) => ({
            ...prev,
            transaction_mode: k,
            start: 0, // Reset to first page on tab change
            order: prev.order.length ? prev.order : [{ column: 0, dir: "asc" }], // Ensure order is always set
          }));
        }}
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
        </Tab>{" "}
      </Tabs>
      {renderTabContent()}
    </Container>
  );
};

export default TabExample;
