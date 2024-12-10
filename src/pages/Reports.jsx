import React from 'react'

function Reports() {
  return (
    <div className="container my-4">
    <h3>Vendor Bill Claim Report</h3>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Job ID</th>
          <th>Journey Info</th>
          <th>Journey Date & Time</th>
          <th>Job Status</th>
          <th>Amount</th>
          <th>Bill Reference</th>
          <th>Settlement Date</th>
          <th>Payment Reference</th>
          <th>Status</th>
          <th>Method</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JOBH1278974458RT</td>
          <td>E20 1DB → RG24 8UW</td>
          <td>13/10/2024 17:00</td>
          <td>Completed</td>
          <td>£295.70</td>
          <td>VGB43900001</td>
          <td>2024-12-02</td>
          <td>TRDNKWDNAWD</td>
          <td>Settled</td>
          <td>Transfer</td>
          <td>
            <button className="btn btn-primary btn-sm me-2">View</button>
            <button className="btn btn-secondary btn-sm">Download</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Reports