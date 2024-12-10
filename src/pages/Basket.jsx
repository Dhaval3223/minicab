import React from 'react'

function Basket() {
  return (
    <div className="accordion" id="accordionExample">
      {/* Subscription Accordion */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Subscription
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Package Type</th>
                  <th>Package Name</th>
                  <th>Validity</th>
                  <th>Package Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* Dynamic rows here */}
                <tr>
                  <td>Type 1</td>
                  <td>Basic</td>
                  <td>30 Days</td>
                  <td>£100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Job Accordion */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Job
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Grand Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>£0</td>
                  <td>
                    <button className="btn btn-success">Pay</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket