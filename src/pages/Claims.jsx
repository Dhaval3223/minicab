import React from 'react'

function Claims() {
  return (
    <div className="container my-4">
      <h3>Vendor Bill Claim Request</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Select</th>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>JOBNA1277034B620W</td>
            <td>S10 1EX → TW6 3XA</td>
            <td>23/09/2024 22:20</td>
            <td>Completed</td>
            <td>£791.20</td>
            <td>12345</td>
            <td>24/09/2024</td>
            <td>TRD123456789</td>
            <td>Query Raised</td>
            <td>Online</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Claims