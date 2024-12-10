import React from 'react'

function Vendor() {
  return (
    <div className="container my-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Jobs</h3>
        <div className="d-flex">
          <select className="form-control me-2">
            <option>Job Status</option>
            <option>Applied</option>
            <option>Pending</option>
          </select>
          <select className="form-control">
            <option>All</option>
            {/* Add more filters */}
          </select>
        </div>
      </div>

      {/* Job Info Table */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Job Info</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Data */}
            <tr>
              <td>
                <strong>JOBWIN727112657130W</strong>
                <p>On Tuesday, 24th Sep, 2024 at 12:28 AM</p>
                <p>
                  Route: 59 Redcar Road, Sheffield, S10 1EX → Swansea Airport,
                  SA2 7JU <br />
                  379.53 Kms by Sedan | M&G | Minor Waiting
                </p>
              </td>
              <td className="text-success">Applied</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Vendor