/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Vendor() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="form_input" style={{ width: 350 }}>
              <div className="custom_select select_multiple">
                <input
                  type="text"
                  name="vendor_job_filter"
                  defaultValue=""
                  readOnly=""
                  className="moveLabel"
                  readable="true"
                />
                <label className="move_label">Job Status</label>
                <ul id="vendorJobFilerUl" style={{ display: "none" }}>
                  <li data-val="market" className="checked">
                    <input type="checkbox" className="moveLabel" />
                    Applied
                  </li>
                  <li data-val="auctioning" className="checked">
                    <input type="checkbox" className="moveLabel" />
                    Quoted
                  </li>
                  <li data-val="vendor_accepted">
                    <input type="checkbox" className="moveLabel" />
                    Accepted
                  </li>
                  <li data-val="vendor_assigned" className="checked">
                    <input type="checkbox" className="moveLabel" />
                    Assigned
                  </li>
                  <li data-val="job_executed">
                    <input type="checkbox" className="moveLabel" />
                    Job Executed
                  </li>
                  <li data-val="completed">
                    <input type="checkbox" className="moveLabel" />
                    Completed
                  </li>
                  <li data-val="guest_no_show">
                    <input type="checkbox" className="moveLabel" />
                    Guest No Show
                  </li>
                  <li data-val="guest_cancelled">
                    <input type="checkbox" className="moveLabel" />
                    Guest Cancelled
                  </li>
                </ul>
                <div className="tags">
                  <span>
                    Applied
                    <i className="mdi mdi-close" />
                  </span>
                  <span>
                    Quoted
                    <i className="mdi mdi-close" />
                  </span>
                  <span>
                    Assigned
                    <i className="mdi mdi-close" />
                  </span>
                </div>
              </div>
            </div>

            <select
              className="form-select mx-1"
              style={{ width: 350 }}
              id="vendorJobTimeFilter"
              aria-label=""
            >
              <option value="all">All</option>
              <option value={2}>Job start within 2 hours</option>
              <option value={6}>Job start within 6 hours</option>
              <option value={12}>Job start within 12 hours</option>
              <option value={24}>Job start within 24 hours</option>
            </select>
          </div>
        </div>
        <div className="table-responsive">
          <div
            id="vendor_job_list_wrapper"
            className="dataTables_wrapper no-footer"
          >
            <div className="dataTables_length" id="vendor_job_list_length">
              <label>
                <select
                  name="vendor_job_list_length"
                  aria-controls="vendor_job_list"
                  className=""
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={200}>200</option>
                </select>
              </label>
            </div>
            <div id="vendor_job_list_filter" className="dataTables_filter">
              <label>
                <input
                  type="search"
                  className=""
                  placeholder="Search records"
                  aria-controls="vendor_job_list"
                />
              </label>
            </div>
            <div
              id="vendor_job_list_processing"
              className="dataTables_processing"
              style={{ display: "none" }}
            >
              Processing...
            </div>
            <table
              id="vendor_job_list"
              className="table table-hover no-footer dataTable"
              style={{
                borderCollapse: "collapse",
                borderSpacing: 0,
                width: "100%",
              }}
              aria-describedby="vendor_job_list_info"
            >
              <thead>
                <tr>
                  <th
                    className="fs_13 fw_800 sorting_disabled sorting_desc"
                    tabIndex={0}
                    aria-controls="vendor_job_list"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 1229 }}
                    aria-label="Job ID"
                  >
                    Job ID
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td className="sorting_1">
                    <div
                      style={{ width: "100%" }}
                      className="filterjobs"
                      data-status="vendor_assigned"
                    >
                      <div
                        style={{
                          width: 600,
                          backgroundColor: "#fffefe",
                          border: "1px solid #ddd",
                        }}
                        onclick="loadVendorJobDetails(this)"
                        data-sender_id={4}
                        data-receiver_id={5}
                        data-job_id={13}
                        data-job_type="market"
                      >
                        <div
                          className="px-2 py-1 d-flex justify-content-between"
                          style={{ backgroundColor: "#ffff00" }}
                        >
                          <span className="fs_16 fw_600 mb-0">Job Info</span>
                          <span className="fs_16 fw_600 mb-0">Assigned</span>
                        </div>
                        <div className="p-2">
                          <div className="d-flex mb-3" style={{ gridGap: 10 }}>
                            <div className="w-50">
                              <h6 className="fs_14 fw_600 mb-0">
                                JOBIJ173070413795OW
                              </h6>
                            </div>
                          </div>
                          <div className="w-100 mb-3 text-end">
                            <h6 className="fs_14 fw_600 mb-0">
                              On Friday, 15th Nov, 2024 at 01:37 PM
                            </h6>
                          </div>
                          <div className="w-100 mb-3">
                            <p className="fs_14 fw_600 mb-0">Route</p>
                            <h6 className="fs_14 fw_600 mb-0">
                              <div className="fs_14 fw_600 mb-0">
                                London Heathrow Airport Terminal 4, TW6 3XA
                                <i className="mdi mdi-arrow-right-thin" />
                                Burtonwood Services M62, WA5 3AX
                              </div>
                            </h6>
                          </div>
                          <div className="d-flex mb-3" style={{ gridGap: 10 }}>
                            <div className="w-50">
                              <p className="fs_14 fw_600 mb-0">
                                316.02 Kms distance (Approx)
                              </p>
                            </div>
                            <div className="w-50">
                              <p className="fs_14 fw_600 mb-0">By Sedan</p>
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
                      <div
                        className="full_details d-flex"
                        style={{ width: "100%", marginTop: 20, gap: 20 }}
                      >
                        <div style={{ width: 600 }}>
                          <div
                            style={{
                              backgroundColor: "#fffefe",
                              border: "1px solid #ddd",
                              marginBottom: 10,
                            }}
                            className=""
                          >
                            <div
                              className="px-2 py-1"
                              style={{ backgroundColor: "#ffff00" }}
                            >
                              <span className="fs_16 fw_600 mb-0">
                                Passenger Info
                              </span>
                            </div>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                padding: 10,
                              }}
                            >
                              <p className="fs_14 fw_600 mb-0">Name: Vijay</p>
                              <p className="fs_14 fw_600 mb-0">
                                Phone no: +441111111
                              </p>
                              <p className="fs_14 fw_600 mb-0">1 Passengers</p>
                              <p className="fs_14 fw_600 mb-0">
                                1 Hand Luggage
                              </p>
                              <p className="fs_14 fw_600 mb-0">1 Suitcase</p>
                            </div>
                            <p className="fs_14 fw_600 mb-0 px-2 pb-1">
                              Special Instructions: 0
                            </p>
                          </div>
                          <div
                            style={{
                              backgroundColor: "#fffefe",
                              border: "1px solid #ddd",
                            }}
                            className=""
                          >
                            <div
                              className="px-2 py-1"
                              style={{ backgroundColor: "#ffff00" }}
                            >
                              <span className="fs_16 fw_600 mb-0">
                                About Merchant
                              </span>
                            </div>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                padding: 10,
                              }}
                            >
                              <span className="fs_14 fw_600 mb-0">
                                Name: Vendor Test
                              </span>
                              <span className="fs_14 fw_600 mb-0">
                                License:{" "}
                                <i className="mdi mdi-close-circle-outline text-danger" />
                              </span>
                              <span className="fs_14 fw_600 mb-0">
                                Company Name: Jewels
                              </span>
                              <span className="fs_14 fw_600 mb-0">
                                Insurance:{" "}
                                <i className="mdi mdi-close-circle-outline text-danger" />
                              </span>
                              <span className="fs_14 fw_600 mb-0">
                                Mobile: 5555555555
                              </span>
                              <span className="fs_14 fw_600 mb-0">
                                Job Posted: 4
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              backgroundColor: "#fffefe",
                              border: "1px solid #ddd",
                            }}
                            className="mt-2  no-click"
                          >
                            <div
                              className="px-2 py-1"
                              style={{ backgroundColor: "#ff9900" }}
                            >
                              <span className="fs_16 fw_600 mb-0">
                                Additional Charges approval reqeuest
                              </span>
                            </div>
                            <form className="vendor_additional_charges_approval_request_form form_box p-0 m-0">
                              <input type="hidden" name="id" defaultValue="" />
                              <input
                                type="hidden"
                                name="job_id"
                                defaultValue={13}
                              />
                            </form>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "calc(100% - 620px)",
                            position: "relative",
                            top: "-247px",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              backgroundColor: "#fffefe",
                              border: "1px solid #ddd",
                              marginBottom: 10,
                            }}
                          >
                            <div
                              className="px-2 py-1"
                              style={{ backgroundColor: "#e06665" }}
                            >
                              <span className="fs_16 fw_600 mb-0">Alert</span>
                            </div>
                            <div className="p-2">
                              <p className="fs_14 fw_600 mb-0">
                                Congratulations! Merchant has alloted this Job
                                to you. Kindly update driver &amp; vehicle
                                details and click "Update" button incase any
                                change of driver or vehicle.
                              </p>
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100%",
                              backgroundColor: "#fffefe",
                              border: "1px solid #ddd",
                              marginBottom: 10,
                              padding: 10,
                            }}
                          >
                            <div className="row">
                              <div className="col-6">
                                <p className="fs_14 fw_600 mb-0 pb-1">
                                  Job Source: Market
                                </p>
                              </div>
                              <div className="col-6 ">
                                <table className="table table-borderless">
                                  <tbody>
                                    <tr>
                                      <td className="fs_14 fw_600 mb-0 pb-0">
                                        Final Price:
                                      </td>
                                      <td className="text-end fs_14 fw_600 mb-0 pb-0">
                                        988.00
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="fs_14 fw_600 mb-0 pb-0">
                                        Comm:
                                      </td>
                                      <td className="text-end fs_14 fw_600 mb-0 pb-0">
                                        9.88
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="fs_14 fw_600 mb-0 pb-0">
                                        Vat:
                                      </td>
                                      <td className="text-end fs_14 fw_600 mb-0 pb-0">
                                        0.99
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="fs_18 fw_600 mb-0 pb-0">
                                        Net Receivable:
                                      </td>
                                      <td className="text-end fs_18 fw_600 mb-0 pb-0">
                                        977.13
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-12">
                                <p className="fs_14 fw_600 mb-0 pb-1 text-end">
                                  Actual amount may vary depends on the charges
                                  or penalty&nbsp;if&nbsp;applied
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100%",
                              backgroundColor: "#fffefe",
                              border: "1px solid #ddd",
                              marginBottom: 10,
                              padding: 10,
                            }}
                            className=""
                          >
                            <form className="update_vendor_details_form">
                              <div className="row">
                                <input
                                  type="hidden"
                                  name="id"
                                  defaultValue={33}
                                />
                                <div className="col-6">
                                  <div className="row gy-2">
                                    <div className="col-6 d-flex align-items-center">
                                      <p className="fs_14 fw_600 mb-0 pb-1">
                                        Driver Name
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <div className="form_input">
                                        <input
                                          type="text"
                                          name="driver_name"
                                          className="uppercase-lowercase-spaces text-uppercase"
                                          defaultValue=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                      <p className="fs_14 fw_600 mb-0 pb-1">
                                        Driver Mobile No
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <div className="form_input">
                                        <input
                                          type="text"
                                          name="driver_mobile_no"
                                          className="numeric"
                                          maxLength={15}
                                          defaultValue=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                      <p className="fs_14 fw_600 mb-0 pb-1">
                                        Vehicle No
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <div className="form_input">
                                        <input
                                          type="text"
                                          name="vendor_vehicle_no"
                                          className="numbers-letters text-uppercase"
                                          defaultValue=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                      <p className="fs_14 fw_600 mb-0 pb-1">
                                        Vehicle Color
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <div className="form_input">
                                        <input
                                          type="text"
                                          name="vendor_vehicle_color"
                                          className="uppercase-lowercase-spaces text-uppercase"
                                          defaultValue=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6 d-flex align-items-end justify-content-end">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-success"
                                    onclick="submit_form(this)"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            className="w-100 mb-2 "
                            style={{
                              border: "1px solid #ddd",
                              padding: "10px",
                              backgroundColor: "#fffefe",
                            }}
                          >
                            <div id="message_card_13">
                              {/* char-area */}
                              <section className="message-area">
                                <div className="container-fluid px-0 h-100">
                                  <div className="row h-100">
                                    <div className="col-12 p-0 m-0">
                                      <div className="chat-area">
                                        {/* chatbox */}
                                        <div className="chatbox">
                                          <div className="modal-dialog-scrollable">
                                            <div className="modal-content">
                                              <div className="modal-body m-0 p-0">
                                                <div className="msg-head">
                                                  ChatBox
                                                </div>
                                                <div className="msg-body">
                                                  <ul />
                                                </div>
                                                <div className="send-box mb-0 pb-2">
                                                  <form className="messageForm">
                                                    <div className="d-flex w-100">
                                                      <input
                                                        type="text"
                                                        name="message"
                                                        id="message"
                                                        className="form-control w-80"
                                                        aria-label="message…"
                                                        placeholder="Type a message"
                                                        required=""
                                                      />
                                                      <input
                                                        type="hidden"
                                                        name="sender_id"
                                                        defaultValue={4}
                                                      />
                                                      <input
                                                        type="hidden"
                                                        name="receiver_id"
                                                        defaultValue={5}
                                                      />
                                                      <input
                                                        type="hidden"
                                                        name="job_id"
                                                        defaultValue={13}
                                                      />
                                                      <input
                                                        type="hidden"
                                                        name="job_type"
                                                        defaultValue="market"
                                                      />
                                                      <button
                                                        type="button"
                                                        onclick="submit_form(this)"
                                                      >
                                                        <i
                                                          className="fa fa-paper-plane"
                                                          aria-hidden="true"
                                                        />{" "}
                                                        Send
                                                      </button>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* chatbox */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              {/* char-area */}
                            </div>
                          </div>
                          <div className="w-100 d-flex justify-content-end align-items-center mb-2">
                            <p className="fs_14 fw_600 mb-0">
                              Please Click on 'Withdraw' if you wish to leave
                              this job opportunity. You may have to pay for the
                              cancellation.
                            </p>
                            <button
                              type="button"
                              className="mx-1 btn btn-sm btn-danger  d-none"
                              data-id={33}
                              onclick="vendor_withdraw_job(this)"
                            >
                              Withdraw
                            </button>
                          </div>
                          <div className="w-100 d-flex justify-content-end align-items-center  ">
                            <button
                              type="button"
                              className="mx-1 btn btn-sm btn-info "
                              data-id={33}
                              data-status="guest_boarded"
                              onclick="status_from_vendor(this)"
                            >
                              Guest Boarded
                            </button>
                            <button
                              type="button"
                              className="mx-1 btn btn-sm btn-warning "
                              data-id={33}
                              data-status="job_executed"
                              onclick="status_from_vendor(this)"
                            >
                              Job Executed
                            </button>
                            <button
                              type="button"
                              className="mx-1 btn btn-sm btn-secondary "
                              data-id={33}
                              data-status="guest_no_show"
                              onclick="status_from_vendor(this)"
                            >
                              Guest No Show
                            </button>
                            <button
                              type="button"
                              className="mx-1 btn btn-sm btn-danger "
                              data-id={33}
                              data-status="guest_cancelled"
                              onclick="status_from_vendor(this)"
                            >
                              Guest Cancelled
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              className="dataTables_info"
              id="vendor_job_list_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 4 of 4 entries
            </div>
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="vendor_job_list_paginate"
            >
              <a
                className="paginate_button previous disabled"
                aria-controls="vendor_job_list"
                data-dt-idx={0}
                tabIndex={-1}
                id="vendor_job_list_previous"
              >
                Previous
              </a>
              <span>
                <a
                  className="paginate_button current"
                  aria-controls="vendor_job_list"
                  data-dt-idx={1}
                  tabIndex={0}
                >
                  1
                </a>
              </span>
              <a
                className="paginate_button next disabled"
                aria-controls="vendor_job_list"
                data-dt-idx={2}
                tabIndex={-1}
                id="vendor_job_list_next"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendor;
