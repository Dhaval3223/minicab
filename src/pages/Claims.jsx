import React from "react";

function Claims() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingVendorBillClaimRequest"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseVendorBillClaimRequest"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseVendorBillClaimRequest"
                  >
                    <div className="w-100 d-flex justify-content-between">
                      <span className="fs_15">Vendor Bill Claim Request</span>
                    </div>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseVendorBillClaimRequest"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingVendorBillClaimRequest"
                  style={{}}
                >
                  <div className="accordion-body">
                    <div className="table-responsive">
                      <div
                        id="vendorBillClaimRequestTable_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          id="vendorBillClaimRequestTable"
                          className="table table-hover dataTable no-footer"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 96 }}
                                aria-label="
                                                                                    
                                                                                        
                                                                                        
                                                                                        Select All
                                                                                        
                                                                                    
                                                                                "
                              >
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="check_all_jobs_for_vendor_bill_claim_request"
                                  />
                                  <label
                                    className="form-check-label fs_15 fw_600"
                                    htmlFor="check_all_jobs_for_vendor_bill_claim_request"
                                  >
                                    Select All
                                  </label>
                                </div>
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 47 }}
                                aria-label="Job ID"
                              >
                                Job ID
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 92 }}
                                aria-label="Journey info"
                              >
                                Journey info
                              </th>
                              <th
                                className="sorting_disabled sorting_desc"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 150 }}
                                aria-label="Journey Date &amp; Time"
                              >
                                Journey Date &amp; Time
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 78 }}
                                aria-label="Job Status"
                              >
                                Job Status
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 58 }}
                                aria-label="Amount"
                              >
                                Amount
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 100 }}
                                aria-label="Bill Reference"
                              >
                                Bill Reference
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 116 }}
                                aria-label="Settlement Date"
                              >
                                Settlement Date
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 141 }}
                                aria-label="Payment Reference"
                              >
                                Payment Reference
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 48 }}
                                aria-label="Status"
                              >
                                Status
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 57 }}
                                aria-label="Method"
                              >
                                Method
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td
                                valign="top"
                                colSpan={11}
                                className="dataTables_empty"
                              >
                                No data available in table
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <div
                        id="vendorDueBillClaimRequestTable_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          id="vendorDueBillClaimRequestTable"
                          className="table table-hover dataTable no-footer"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 22 }}
                                aria-label="
                                                                                "
                              ></th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 159 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 133 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled sorting_desc"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 133 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 87 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 39 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 100 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 79 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 121 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 49 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 58 }}
                                aria-label=""
                              />
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td>
                                <div
                                  className="form-check"
                                  title="testing CF and BF"
                                >
                                  <input
                                    className="form-check-input add_job_for_vendor_bill_claim_request "
                                    data-id="VCB44400015"
                                    type="checkbox"
                                    defaultValue=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">
                                    ------------------------
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF and BF">
                                  <h6 className="mb-0">--------------------</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="testing CF and BF">
                                  <h6 className="mb-0">--------------------</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF and BF">
                                  <h6 className="mb-0">-------------</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF and BF">
                                  <h6
                                    className="mb-0"
                                    id="vendor_bill_payable_amount_VCB44400015"
                                  >
                                    63.73
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF and BF">
                                  <h6 className="mb-0">VCB44400015</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF and BF">
                                  <h6 className="mb-0">2024-12-12</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF and BF">
                                  <h6 className="mb-0">trcx44545444011</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Settled</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF and BF">
                                  <h6 className="mb-0">Transfer</h6>
                                </div>
                              </td>
                            </tr>
                            <tr className="even">
                              <td>
                                <div className="form-check" title="testing CF">
                                  <input
                                    className="form-check-input add_job_for_vendor_bill_claim_request "
                                    data-id="VCB71300019"
                                    type="checkbox"
                                    defaultValue=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">
                                    ------------------------
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF">
                                  <h6 className="mb-0">--------------------</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="testing CF">
                                  <h6 className="mb-0">--------------------</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF">
                                  <h6 className="mb-0">-------------</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF">
                                  <h6
                                    className="mb-0"
                                    id="vendor_bill_payable_amount_VCB71300019"
                                  >
                                    29.50
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF">
                                  <h6 className="mb-0">VCB71300019</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF">
                                  <h6 className="mb-0">2024-12-12</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF">
                                  <h6 className="mb-0">trcx44545444022</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Settled</h6>
                                </div>
                              </td>
                              <td>
                                <div title="testing CF">
                                  <h6 className="mb-0">Transfer</h6>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12 d-flex justify-content-end align-items-center">
                        <span className="fs_15 fw_600 mx-1">
                          Total Bill Amount Payable:{" "}
                        </span>
                        <span className="fs_15 fw_600 me-2">
                          <span className="mdi mdi-currency-gbp" />
                          <span id="vendor_bill_claim_request_grand_total">
                            0
                          </span>
                        </span>
                        <span
                          className="btn btn-success small-screen-btn fs_12"
                          data-ids=""
                          id="vendor_bill_claim_request_btn"
                        >
                          Submit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingMerchantRefundRequest"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseMerchantRefundRequest"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseMerchantRefundRequest"
                  >
                    <div className="w-100 d-flex justify-content-between">
                      <span className="fs_15">Merchant Refund Request</span>
                    </div>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseMerchantRefundRequest"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingMerchantRefundRequest"
                  style={{}}
                >
                  <div className="accordion-body">
                    <div className="table-responsive">
                      <div
                        id="merchantRefundRequestTable_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          id="merchantRefundRequestTable"
                          className="table table-hover dataTable no-footer"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 67 }}
                                aria-label="
                                                                                    
                                                                                        
                                                                                        
                                                                                        Select All
                                                                                        
                                                                                    
                                                                                "
                              >
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="check_all_jobs_for_merchant_refund_request"
                                  />
                                  <label
                                    className="form-check-label fs_15 fw_600"
                                    htmlFor="check_all_jobs_for_merchant_refund_request"
                                  >
                                    Select All
                                  </label>
                                </div>
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 130 }}
                                aria-label="Job ID"
                              >
                                Job ID
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 104 }}
                                aria-label="Job Status"
                              >
                                Job Status
                              </th>
                              <th
                                className="sorting_disabled sorting_desc"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 108 }}
                                aria-label="Journey Date &amp; Time"
                              >
                                Journey Date &amp; Time
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 43 }}
                                aria-label="NJP/FAP"
                              >
                                NJP/FAP
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 73 }}
                                aria-label="Payment Type"
                              >
                                Payment Type
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 115 }}
                                aria-label="Amt Settled to Vendor"
                              >
                                Amt Settled to Vendor
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 96 }}
                                aria-label="Merchant Charges"
                              >
                                Merchant Charges
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 52 }}
                                aria-label="Difference"
                              >
                                Difference
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 72 }}
                                aria-label="Refund ID"
                              >
                                Refund ID
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 71 }}
                                aria-label="Processed On"
                              >
                                Processed On
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="merchantRefundRequestTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 69 }}
                                aria-label="Funds sent to: activate to sort column ascending"
                              >
                                Funds sent to
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="merchantRefundRequestTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 73 }}
                                aria-label="Reference No.: activate to sort column ascending"
                              >
                                Reference No.
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="merchantRefundRequestTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 55 }}
                                aria-label="Status: activate to sort column ascending"
                              >
                                Status
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="merchantRefundRequestTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 37 }}
                                aria-label="Method: activate to sort column ascending"
                              >
                                Method
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td>
                                <div className="form-check" title="">
                                  <input
                                    className="form-check-input add_job_for_merchant_refund_request no-click"
                                    data-id={67}
                                    data-payment_type="Online"
                                    type="checkbox"
                                    defaultValue=""
                                    defaultChecked=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">JOB3I173194714157OW</h6>
                                  <div
                                    style={{
                                      width: 600,
                                      backgroundColor: "#fffefe",
                                      border: "1px solid #ddd",
                                    }}
                                    className="custom_title_info"
                                  >
                                    <div
                                      className="px-2 py-1 d-flex justify-content-between"
                                      style={{ backgroundColor: "#ffff00" }}
                                    >
                                      <span className="fs_16 fw_600 mb-0">
                                        Job Info
                                      </span>
                                    </div>
                                    <div className="p-2">
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <h6 className="fs_14 fw_600 mb-0">
                                            JOB3I173194714157OW
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="w-100 mb-3 text-end">
                                        <h6 className="fs_14 fw_600 mb-0">
                                          On Tuesday, 19th Nov, 2024 at 04:55 AM
                                        </h6>
                                      </div>
                                      <div className="w-100 mb-3">
                                        <p className="fs_14 fw_600 mb-0">
                                          Route
                                        </p>
                                        <h6 className="fs_14 fw_600 mb-0">
                                          <div className="fs_14 fw_600 mb-0">
                                            8 Bosworth Road, Cambridge, CB1 8RG
                                            <i className="mdi mdi-arrow-right-thin" />
                                            Clophill, Bedford, MK45 4BT
                                          </div>
                                        </h6>
                                      </div>
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            68.56 Kms distance (Approx)
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            By Any Suitable Vehicle
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            M&amp;G
                                          </span>
                                          <br />
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            Minor Waiting
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Completed</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="">
                                  <h6 className="mb-0">19/11/2024 04:55</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">170</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Online</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">170</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">0</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6
                                    className="mb-0"
                                    id="merchant_refund_payable_amount_67"
                                  >
                                    0
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">REV21000008</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Processing</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                            </tr>
                            <tr className="even">
                              <td>
                                <div className="form-check" title="">
                                  <input
                                    className="form-check-input add_job_for_merchant_refund_request "
                                    data-id={99}
                                    data-payment_type="Online"
                                    type="checkbox"
                                    defaultValue=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">JOBG8173287137829OW</h6>
                                  <div
                                    style={{
                                      width: 600,
                                      backgroundColor: "#fffefe",
                                      border: "1px solid #ddd",
                                    }}
                                    className="custom_title_info"
                                  >
                                    <div
                                      className="px-2 py-1 d-flex justify-content-between"
                                      style={{ backgroundColor: "#ffff00" }}
                                    >
                                      <span className="fs_16 fw_600 mb-0">
                                        Job Info
                                      </span>
                                    </div>
                                    <div className="p-2">
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <h6 className="fs_14 fw_600 mb-0">
                                            JOBG8173287137829OW
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="w-100 mb-3 text-end">
                                        <h6 className="fs_14 fw_600 mb-0">
                                          On Friday, 29th Nov, 2024 at 03:38 PM
                                        </h6>
                                      </div>
                                      <div className="w-100 mb-3">
                                        <p className="fs_14 fw_600 mb-0">
                                          Route
                                        </p>
                                        <h6 className="fs_14 fw_600 mb-0">
                                          <div className="fs_14 fw_600 mb-0">
                                            Manchester Airport Terminal 3, M90
                                            1QX
                                            <i className="mdi mdi-arrow-right-thin" />
                                            4 Observer Close, Biddenham,
                                            Bedford, MK40 4EU
                                          </div>
                                        </h6>
                                      </div>
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            252.68 Kms distance (Approx)
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            By Estate
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-check-circle text-success" />{" "}
                                            M&amp;G
                                          </span>
                                          <br />
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            Minor Waiting
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Merchant_cancelled</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="">
                                  <h6 className="mb-0">29/11/2024 15:38</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">850.00</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Online</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">850</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">0</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6
                                    className="mb-0"
                                    id="merchant_refund_payable_amount_99"
                                  >
                                    0
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td>
                                <div className="form-check" title="">
                                  <input
                                    className="form-check-input add_job_for_merchant_refund_request no-click"
                                    data-id={100}
                                    data-payment_type=""
                                    type="checkbox"
                                    defaultValue=""
                                    defaultChecked=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">JOBLP173294202616OW</h6>
                                  <div
                                    style={{
                                      width: 600,
                                      backgroundColor: "#fffefe",
                                      border: "1px solid #ddd",
                                    }}
                                    className="custom_title_info"
                                  >
                                    <div
                                      className="px-2 py-1 d-flex justify-content-between"
                                      style={{ backgroundColor: "#ffff00" }}
                                    >
                                      <span className="fs_16 fw_600 mb-0">
                                        Job Info
                                      </span>
                                    </div>
                                    <div className="p-2">
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <h6 className="fs_14 fw_600 mb-0">
                                            JOBLP173294202616OW
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="w-100 mb-3 text-end">
                                        <h6 className="fs_14 fw_600 mb-0">
                                          On Saturday, 30th Nov, 2024 at 04:15
                                          PM
                                        </h6>
                                      </div>
                                      <div className="w-100 mb-3">
                                        <p className="fs_14 fw_600 mb-0">
                                          Route
                                        </p>
                                        <h6 className="fs_14 fw_600 mb-0">
                                          <div className="fs_14 fw_600 mb-0">
                                            London Heathrow Airport Terminal 4,
                                            TW6 3XA
                                            <i className="mdi mdi-arrow-right-thin" />
                                            8 Bosworth Road, Cambridge, CB1 8RG
                                          </div>
                                        </h6>
                                      </div>
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            120.11 Kms distance (Approx)
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            By Any Suitable Vehicle
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-check-circle text-success" />{" "}
                                            M&amp;G
                                          </span>
                                          <br />
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-check-circle text-success" />{" "}
                                            Minor Waiting
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Completed</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="">
                                  <h6 className="mb-0">30/11/2024 16:15</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">410.00</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">360</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">0</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6
                                    className="mb-0"
                                    id="merchant_refund_payable_amount_100"
                                  >
                                    50
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">REV69600001</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Processing</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                            </tr>
                            <tr className="even">
                              <td>
                                <div className="form-check" title="">
                                  <input
                                    className="form-check-input add_job_for_merchant_refund_request "
                                    data-id={151}
                                    data-payment_type="Online"
                                    type="checkbox"
                                    defaultValue=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">JOBFU173396752261OW</h6>
                                  <div
                                    style={{
                                      width: 600,
                                      backgroundColor: "#fffefe",
                                      border: "1px solid #ddd",
                                    }}
                                    className="custom_title_info"
                                  >
                                    <div
                                      className="px-2 py-1 d-flex justify-content-between"
                                      style={{ backgroundColor: "#ffff00" }}
                                    >
                                      <span className="fs_16 fw_600 mb-0">
                                        Job Info
                                      </span>
                                    </div>
                                    <div className="p-2">
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <h6 className="fs_14 fw_600 mb-0">
                                            JOBFU173396752261OW
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="w-100 mb-3 text-end">
                                        <h6 className="fs_14 fw_600 mb-0">
                                          On Thursday, 12th Dec, 2024 at 01:05
                                          PM
                                        </h6>
                                      </div>
                                      <div className="w-100 mb-3">
                                        <p className="fs_14 fw_600 mb-0">
                                          Route
                                        </p>
                                        <h6 className="fs_14 fw_600 mb-0">
                                          <div className="fs_14 fw_600 mb-0">
                                            45 Lloyd Baker Street, London, WC1X
                                            9AA
                                            <i className="mdi mdi-arrow-right-thin" />
                                            107 Keith Lucas Road, Farnborough,
                                            GU14 0DJ
                                          </div>
                                        </h6>
                                      </div>
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            65.11 Kms distance (Approx)
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            By Executive Car
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            M&amp;G
                                          </span>
                                          <br />
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            Minor Waiting
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Completed</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="">
                                  <h6 className="mb-0">12/12/2024 13:05</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">300.00</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Online</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">311</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">11</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6
                                    className="mb-0"
                                    id="merchant_refund_payable_amount_151"
                                  >
                                    -22
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td>
                                <div className="form-check" title="">
                                  <input
                                    className="form-check-input add_job_for_merchant_refund_request "
                                    data-id={152}
                                    data-payment_type=""
                                    type="checkbox"
                                    defaultValue=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">JOBFU173396752261RT</h6>
                                  <div
                                    style={{
                                      width: 600,
                                      backgroundColor: "#fffefe",
                                      border: "1px solid #ddd",
                                    }}
                                    className="custom_title_info"
                                  >
                                    <div
                                      className="px-2 py-1 d-flex justify-content-between"
                                      style={{ backgroundColor: "#ffff00" }}
                                    >
                                      <span className="fs_16 fw_600 mb-0">
                                        Job Info
                                      </span>
                                    </div>
                                    <div className="p-2">
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <h6 className="fs_14 fw_600 mb-0">
                                            JOBFU173396752261RT
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="w-100 mb-3 text-end">
                                        <h6 className="fs_14 fw_600 mb-0">
                                          On Thursday, 12th Dec, 2024 at 04:10
                                          PM
                                        </h6>
                                      </div>
                                      <div className="w-100 mb-3">
                                        <p className="fs_14 fw_600 mb-0">
                                          Route
                                        </p>
                                        <h6 className="fs_14 fw_600 mb-0">
                                          <div className="fs_14 fw_600 mb-0">
                                            107 Keith Lucas Road, Farnborough,
                                            GU14 0DJ
                                            <i className="mdi mdi-arrow-right-thin" />
                                            45 Lloyd Baker Street, London, WC1X
                                            9AA
                                          </div>
                                        </h6>
                                      </div>
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            64.18 Kms distance (Approx)
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            By Executive Car
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            M&amp;G
                                          </span>
                                          <br />
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            Minor Waiting
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Completed</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="">
                                  <h6 className="mb-0">12/12/2024 16:10</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">290</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">290</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">0</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6
                                    className="mb-0"
                                    id="merchant_refund_payable_amount_152"
                                  >
                                    0
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                            </tr>
                            <tr className="even">
                              <td>
                                <div className="form-check" title="">
                                  <input
                                    className="form-check-input add_job_for_merchant_refund_request "
                                    data-id={153}
                                    data-payment_type="Online"
                                    type="checkbox"
                                    defaultValue=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">JOBWC173396769854OW</h6>
                                  <div
                                    style={{
                                      width: 600,
                                      backgroundColor: "#fffefe",
                                      border: "1px solid #ddd",
                                    }}
                                    className="custom_title_info"
                                  >
                                    <div
                                      className="px-2 py-1 d-flex justify-content-between"
                                      style={{ backgroundColor: "#ffff00" }}
                                    >
                                      <span className="fs_16 fw_600 mb-0">
                                        Job Info
                                      </span>
                                    </div>
                                    <div className="p-2">
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <h6 className="fs_14 fw_600 mb-0">
                                            JOBWC173396769854OW
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="w-100 mb-3 text-end">
                                        <h6 className="fs_14 fw_600 mb-0">
                                          On Thursday, 12th Dec, 2024 at 10:10
                                          AM
                                        </h6>
                                      </div>
                                      <div className="w-100 mb-3">
                                        <p className="fs_14 fw_600 mb-0">
                                          Route
                                        </p>
                                        <h6 className="fs_14 fw_600 mb-0">
                                          <div className="fs_14 fw_600 mb-0">
                                            16 Bateman Street, Cambridge, CB2
                                            1NB
                                            <i className="mdi mdi-arrow-right-thin" />
                                            Paradise Square, Oxford, OX1 1UD
                                          </div>
                                        </h6>
                                      </div>
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            139.00 Kms distance (Approx)
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            By Any Suitable Vehicle
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            M&amp;G
                                          </span>
                                          <br />
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            Minor Waiting
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Completed</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="">
                                  <h6 className="mb-0">12/12/2024 10:10</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">350.00</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Online</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">365</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">30</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6
                                    className="mb-0"
                                    id="merchant_refund_payable_amount_153"
                                  >
                                    -45
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td>
                                <div className="form-check" title="">
                                  <input
                                    className="form-check-input add_job_for_merchant_refund_request "
                                    data-id={154}
                                    data-payment_type="Online"
                                    type="checkbox"
                                    defaultValue=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">JOBWC173396769854RT</h6>
                                  <div
                                    style={{
                                      width: 600,
                                      backgroundColor: "#fffefe",
                                      border: "1px solid #ddd",
                                    }}
                                    className="custom_title_info"
                                  >
                                    <div
                                      className="px-2 py-1 d-flex justify-content-between"
                                      style={{ backgroundColor: "#ffff00" }}
                                    >
                                      <span className="fs_16 fw_600 mb-0">
                                        Job Info
                                      </span>
                                    </div>
                                    <div className="p-2">
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <h6 className="fs_14 fw_600 mb-0">
                                            JOBWC173396769854RT
                                          </h6>
                                        </div>
                                      </div>
                                      <div className="w-100 mb-3 text-end">
                                        <h6 className="fs_14 fw_600 mb-0">
                                          On Thursday, 12th Dec, 2024 at 01:15
                                          PM
                                        </h6>
                                      </div>
                                      <div className="w-100 mb-3">
                                        <p className="fs_14 fw_600 mb-0">
                                          Route
                                        </p>
                                        <h6 className="fs_14 fw_600 mb-0">
                                          <div className="fs_14 fw_600 mb-0">
                                            Paradise Square, Oxford, OX1 1UD
                                            <i className="mdi mdi-arrow-right-thin" />
                                            16 Bateman Street, Cambridge, CB2
                                            1NB
                                          </div>
                                        </h6>
                                      </div>
                                      <div
                                        className="d-flex mb-3"
                                        style={{ gridGap: 10 }}
                                      >
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            138.98 Kms distance (Approx)
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <p className="fs_14 fw_600 mb-0">
                                            By Any Suitable Vehicle
                                          </p>
                                        </div>
                                        <div className="w-50">
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            M&amp;G
                                          </span>
                                          <br />
                                          <span className="fs_14 fw_600 mb-0">
                                            <i className="mdi mdi-close-circle-outline text-danger" />{" "}
                                            Minor Waiting
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Completed</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="">
                                  <h6 className="mb-0">12/12/2024 13:15</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">350</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Online</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">350</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">0</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6
                                    className="mb-0"
                                    id="merchant_refund_payable_amount_154"
                                  >
                                    0
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0" />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <div
                        id="merchantDueRefundRequestTable_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          id="merchantDueRefundRequestTable"
                          className="table table-hover dataTable no-footer"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 12 }}
                                aria-label="
                                                                                "
                              ></th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 87 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 72 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled sorting_desc"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 72 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 72 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 72 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 72 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 46 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 40 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 72 }}
                                aria-label=""
                              />
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 48 }}
                                aria-label=""
                              />
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="merchantDueRefundRequestTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 29 }}
                                aria-label=": activate to sort column ascending"
                              />
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="merchantDueRefundRequestTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 122 }}
                                aria-label=": activate to sort column ascending"
                              />
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="merchantDueRefundRequestTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 33 }}
                                aria-label=": activate to sort column ascending"
                              />
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="merchantDueRefundRequestTable"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: 41 }}
                                aria-label=": activate to sort column ascending"
                              />
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td>
                                <div className="form-check" title="dddd">
                                  <input
                                    className="form-check-input add_job_for_merchant_refund_request "
                                    data-id="REV52300012"
                                    type="checkbox"
                                    defaultValue=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="custom_title">
                                  <h6 className="mb-0">
                                    ------------------------
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">--------------------</h6>
                                </div>
                              </td>
                              <td className="sorting_1">
                                <div title="dddd">
                                  <h6 className="mb-0">--------------------</h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">--------------------</h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">--------------------</h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">--------------------</h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">-------------</h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6
                                    className="mb-0"
                                    id="merchant_refund_payable_amount_REV52300012"
                                  >
                                    -400.00
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">REV52300012</h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">2024-12-11</h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">Wallet</h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">TRWL17339365609538</h6>
                                </div>
                              </td>
                              <td>
                                <div title="">
                                  <h6 className="mb-0">Settled</h6>
                                </div>
                              </td>
                              <td>
                                <div title="dddd">
                                  <h6 className="mb-0">Transfer</h6>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12 d-flex justify-content-end align-items-center my-2">
                        <span className="fs_15 fw_600 mx-1">
                          Funds sent to:{" "}
                        </span>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="fund_sent_to"
                            id="fund_sent_to_wallet"
                            defaultValue="wallet"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fund_sent_to_wallet"
                          >
                            Wallet
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="fund_sent_to"
                            id="fund_sent_to_credit"
                            defaultValue="credit"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fund_sent_to_credit"
                          >
                            Credit
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="fund_sent_to"
                            id="fund_sent_to_bank"
                            defaultValue="bank"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fund_sent_to_bank"
                          >
                            Bank
                          </label>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end align-items-center">
                        <span className="fs_15 fw_600 mx-1">
                          Total Bill Amount Payable:{" "}
                        </span>
                        <span className="fs_15 fw_600 me-2">
                          <span className="mdi mdi-currency-gbp" />
                          <span id="merchant_refund_request_grand_total">
                            0
                          </span>
                        </span>
                        <span
                          className="btn btn-success small-screen-btn fs_12"
                          data-ids=""
                          id="merchant_refund_request_btn"
                        >
                          Submit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Claims;
