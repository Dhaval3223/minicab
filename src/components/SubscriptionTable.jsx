import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const SubscriptionHistoryTable = ({ trash = 0, merchantId = 1 }) => {
  const [data, setData] = useState([]); // Table data
  const [loading, setLoading] = useState(true); // Loading state
  const [totalRows, setTotalRows] = useState(0); // Total rows for pagination
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [sortColumn, setSortColumn] = useState(4); // Default sorted column
  const [sortDirection, setSortDirection] = useState("asc"); // Default sort direction
  const rowsPerPage = 5; // Rows per page
  const token = localStorage.getItem("token"); // Fetch token from localStorage

  const subscriptionHistoryUrl = `https://124124.site/minicab/public/api/user-subscription-history-list`;

  // Dynamic column definitions for server-side DataTables
  const columns = [
    { data: 0, searchable: true },
    { data: 1, searchable: true },
    { data: 2, searchable: true },
    { data: 3, searchable: true },
    { data: 4, searchable: true },
  ];

  // Fetch subscription history
  const fetchSubscriptionHistory = async (page = 1, search = "", column = 4, dir = "asc") => {
    setLoading(true);
    try {
      // Calculate offset
      const offset = (page - 1) * rowsPerPage;

      // API Call
      const response = await axios.get(subscriptionHistoryUrl, {
        params: {
          draw: 1,
          start: offset,
          length: rowsPerPage,
          "search[value]": search,
          trash: trash,
          id: merchantId,
          ...columns.reduce((acc, col, index) => {
            acc[`columns[${index}][data]`] = col.data;
            acc[`columns[${index}][searchable]`] = col.searchable;
            return acc;
          }, {}),
          [`order[0][column]`]: column,
          [`order[0][dir]`]: dir,
        },
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in header
          "Content-Type": "application/json",
        },
      });

      const responseData = response.data?.data || {};
      const rows = responseData.data || []; // Safely access data array
      const totalRecords = responseData.recordsFiltered || 0; // Use filtered count for pagination

      // Transform data for the table
      const transformedData = rows.map((row) => ({
        column1: row[0], // HTML-wrapped content for Column 1
        column2: row[1], // HTML-wrapped content for Column 2
        column3: row[2], // HTML-wrapped content for Column 3
        column4: row[3], // HTML-wrapped content for Column 4
        date: row[4],    // HTML-wrapped content for Date
      }));

      // Update state
      setData(transformedData); // Update table data
      setTotalRows(totalRecords); // Update total rows for pagination
    } catch (error) {
      console.error("Error fetching subscription history:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on page load or when currentPage, searchTerm, or sort changes
  useEffect(() => {
    fetchSubscriptionHistory(currentPage, searchTerm, sortColumn, sortDirection);
  }, [currentPage, searchTerm, sortColumn, sortDirection]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle sort change
  const handleSort = (column, sortDirection) => {
    setSortColumn(column.sortField || 4); // Use `sortField` if provided
    setSortDirection(sortDirection);
  };

  // Define columns for the table
  const tableColumns = [
    {
      name: "Column 1",
      selector: (row) => (
        <div
          dangerouslySetInnerHTML={{ __html: row.column1 }}
        /> /* Render HTML content */
      ),
      sortable: true,
      sortField: 0, // Map to server-side column index
    },
    {
      name: "Column 2",
      selector: (row) => (
        <div
          dangerouslySetInnerHTML={{ __html: row.column2 }}
        />
      ),
      sortable: true,
      sortField: 1,
    },
    {
      name: "Column 3",
      selector: (row) => (
        <div
          dangerouslySetInnerHTML={{ __html: row.column3 }}
        />
      ),
      sortable: true,
      sortField: 2,
    },
    {
      name: "Column 4",
      selector: (row) => (
        <div
          dangerouslySetInnerHTML={{ __html: row.column4 }}
        />
      ),
      sortable: true,
      sortField: 3,
    },
    {
      name: "Date",
      selector: (row) => (
        <div
          dangerouslySetInnerHTML={{ __html: row.date }}
        />
      ),
      sortable: true,
      sortField: 4,
    },
  ];

  return (
    <div>
      <DataTable
        title="Subscription History"
        columns={tableColumns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        onChangePage={handlePageChange}
        paginationPerPage={rowsPerPage}
        highlightOnHover
        pointerOnHover
        noDataComponent="No subscription history available."
        onSort={handleSort}
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search records"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              marginLeft: "10px",
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        }
      />
    </div>
  );
};

export default SubscriptionHistoryTable;
