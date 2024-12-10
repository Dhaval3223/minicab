import React from 'react'

function Treasury() {
  return (
    <div className="container my-4">
    {/* Header */}
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h3>Wallet</h3>
      <h4>Balance: $2567.31</h4>
    </div>

    {/* Transactions Table */}
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Data */}
          <tr>
            <td>TRWL123456789</td>
            <td>2024-11-28</td>
            <td>Amount transferred to credit</td>
            <td>0</td>
            <td>100.00</td>
            <td>2467.31</td>
          </tr>
          {/* Map more data rows here */}
        </tbody>
      </table>
    </div>

    {/* Transfer Form */}
    <div className="mt-4">
      <h5>Transfer Form</h5>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Pay To</label>
            <select className="form-control">
              <option>Select</option>
              {/* Add options dynamically */}
            </select>
          </div>
          <div className="col-md-6">
            <label>Pay From</label>
            <select className="form-control">
              <option>Select</option>
              {/* Add options dynamically */}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-success">Transfer</button>
      </form>
    </div>

    {/* Report Section */}
    <div className="mt-4">
      <h5>Transfers & Reports</h5>
      <form className="d-flex align-items-center">
        <select className="form-control w-25 me-3">
          <option>Report Type</option>
          {/* Add report types */}
        </select>
        <input type="date" className="form-control w-25 me-3" />
        <input type="date" className="form-control w-25 me-3" />
        <button type="button" className="btn btn-primary">View</button>
        <button type="button" className="btn btn-secondary ms-2">Download</button>
      </form>
    </div>
  </div>
  )
}

export default Treasury