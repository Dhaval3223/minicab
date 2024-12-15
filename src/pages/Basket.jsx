import React from "react";
import { useUserSubscriptionsInBasket } from "../hooks/useGetUserSubscriptions";

function Basket() {
  const { data: userSubscriptionInBasket, isLoading } =
    useUserSubscriptionsInBasket();

  console.log("userSubscriptionInBasket", userSubscriptionInBasket);

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingSubscription"
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSubscription"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseSubscription"
                  >
                    <div className="w-100 d-flex justify-content-between">
                      <span className="fs_15">Subscription</span>
                    </div>
                  </button>
                </h2>
                {userSubscriptionInBasket?.data?.subscriptions?.map(
                  (subscription) => {
                    const {
                      subscription_type,
                      package_name,
                      parent_package_name,
                      validity_period,
                      final_amount,
                      payable_amount,
                      is_auto_renew,
                      created_at,
                      wallet_balance,
                      credit_balance,
                    } = subscription || {};

                    const date = new Date(created_at);

                    const formattedDate = date
                      .toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })
                      .replace(",", "");
                    return (
                      <div
                        id="panelsStayOpen-collapseSubscription"
                        className="accordion-collapse show"
                        aria-labelledby="panelsStayOpen-headingSubscription"
                      >
                        <div className="accordion-body">
                          <div className="table-responsive">
                            <table
                              id="basketTable"
                              className="table"
                              style={{
                                borderCollapse: "collapse",
                                borderSpacing: 0,
                                width: "100%",
                              }}
                            >
                              <thead>
                                <tr>
                                  <th>Package Type</th>
                                  <th>Package Name</th>
                                  <th>Validity</th>
                                  <th>Package Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{subscription_type}</td>
                                  <td>{package_name}</td>
                                  <td>{validity_period}</td>
                                  <td>{payable_amount}</td>
                                </tr>
                                <tr>
                                  <td colSpan={4} />
                                  <td colSpan="">
                                    <div className="d-flex align-items-center">
                                      <div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(5, 1fr)",
                                          }}
                                          className="mb-2"
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0" />
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Current Balance
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Availed Balance
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Remaining Balance
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0" />
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(5, 1fr)",
                                          }}
                                          className="mb-2"
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">Wallet</h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6
                                              className="mb-0"
                                              id="current_wallet_balance_146"
                                            >
                                              {wallet_balance}
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <input
                                              id="availed_wallet_amount_146"
                                              style={{
                                                padding: "5px 8px",
                                                width: "100%",
                                                border: "1px solid #eee",
                                              }}
                                              defaultValue={0.0}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6
                                              className="mb-0"
                                              id="remaining_wallet_balance_146"
                                            >
                                              49.90
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <button
                                              style={{ width: 100 }}
                                              type="button"
                                              data-id={146}
                                              className="btn small-screen-btn btn-success"
                                              onclick="wallet_to_final_payable_amount_calculation(this)"
                                              id="pay_from_wallet_btn_146"
                                            >
                                              Apply
                                            </button>
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(5, 1fr)",
                                          }}
                                          className="mb-2"
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Credit Amount
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6
                                              className="mb-0"
                                              id="current_credit_balance_146"
                                            >
                                              {credit_balance}
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <input
                                              id="availed_credit_amount_146"
                                              style={{
                                                padding: "5px 8px",
                                                width: "100%",
                                                border: "1px solid #eee",
                                              }}
                                              defaultValue={0.0}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6
                                              id="remaining_credit_balance_146"
                                              className="mb-0"
                                            >
                                              117
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <button
                                              style={{ width: 100 }}
                                              className="btn small-screen-btn btn-warning"
                                              data-id={146}
                                              onclick="credit_to_final_payable_amount_calculation(this)"
                                              id="pay_from_credit_btn_146"
                                            >
                                              Apply
                                            </button>
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(5, 1fr)",
                                          }}
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Final Amount
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            {final_amount}
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <p
                                              className="mb-0"
                                              id="payable_final_amount_146"
                                            >
                                              105.00
                                            </p>
                                            <p
                                              className="mb-0 d-none"
                                              id="actual_final_amount_146"
                                            >
                                              105.00
                                            </p>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <button
                                              style={{ width: 100 }}
                                              className="btn btn-info small-screen-btn fs_12"
                                              data-id={146}
                                              id="pay_online_btn_146"
                                              onclick="pay_online(this)"
                                            >
                                              Pay Online
                                            </button>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <button
                                              style={{ width: "auto" }}
                                              className="btn btn-primary small-screen-btn fs_12"
                                              data-id={146}
                                              onclick="release_function(this)"
                                            >
                                              Cancel Subscription
                                            </button>
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(3, 1fr)",
                                          }}
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <div className="d-flex">
                                              <label className="mt-2 me-1">
                                                Auto Renew
                                              </label>
                                              <div className="switch on_off auto_renew_subscription mt-1">
                                                <input
                                                  type="hidden"
                                                  name="is_auto_renew_146"
                                                  defaultValue={0}
                                                />
                                                <label
                                                  data-id={146}
                                                  className="mb-0 mt-1"
                                                >
                                                  <input
                                                    type="checkbox"
                                                    className=""
                                                  />
                                                  <span />
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          />
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                              textAlign: "right",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Added to basket at {formattedDate}
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <button
                                          style={{ width: 100 }}
                                          className="btn small-screen-btn btn-success"
                                          data-id={146}
                                          id="pay_from_wallet_and_credit_btn_146"
                                          onclick="pay_from_wallet_and_credit(this)"
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                    <div className="action_btn mt-3">
                                      <button
                                        className="btn btn-success small-screen-btn fs_12 d-none"
                                        data-id={146}
                                        onclick="pay_from_wallet(this)"
                                      >
                                        Pay from Wallet
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                {/* <tr>
                                  <td>Paid</td>
                                  <td>Saver</td>
                                  <td>30</td>
                                  <td>153.00</td>
                                </tr>
                                <tr>
                                  <td colSpan={4} />
                                  <td colSpan="">
                                    <div className="d-flex align-items-center">
                                      <div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(5, 1fr)",
                                          }}
                                          className="mb-2"
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0" />
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Current Balance
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Availed Balance
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Remaining Balance
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0" />
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(5, 1fr)",
                                          }}
                                          className="mb-2"
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">Wallet</h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6
                                              className="mb-0"
                                              id="current_wallet_balance_145"
                                            >
                                              49.90
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <input
                                              id="availed_wallet_amount_145"
                                              style={{
                                                padding: "5px 8px",
                                                width: "100%",
                                                border: "1px solid #eee",
                                              }}
                                              defaultValue={0.0}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6
                                              className="mb-0"
                                              id="remaining_wallet_balance_145"
                                            >
                                              49.90
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <button
                                              style={{ width: 100 }}
                                              type="button"
                                              data-id={145}
                                              className="btn btn-success small-screen-btn"
                                              onclick="wallet_to_final_payable_amount_calculation(this)"
                                              id="pay_from_wallet_btn_145"
                                            >
                                              Apply
                                            </button>
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(5, 1fr)",
                                          }}
                                          className="mb-2"
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Credit Amount
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6
                                              className="mb-0"
                                              id="current_credit_balance_145"
                                            >
                                              117
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <input
                                              id="availed_credit_amount_145"
                                              style={{
                                                padding: "5px 8px",
                                                width: "100%",
                                                border: "1px solid #eee",
                                              }}
                                              defaultValue={0.0}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6
                                              id="remaining_credit_balance_145"
                                              className="mb-0"
                                            >
                                              117
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <button
                                              style={{ width: 100 }}
                                              className="btn btn-warning small-screen-btn"
                                              data-id={145}
                                              onclick="credit_to_final_payable_amount_calculation(this)"
                                              id="pay_from_credit_btn_145"
                                            >
                                              Apply
                                            </button>
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(5, 1fr)",
                                          }}
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Final Amount
                                            </h6>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          ></div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <p
                                              className="mb-0"
                                              id="payable_final_amount_145"
                                            >
                                              153.00
                                            </p>
                                            <p
                                              className="mb-0 d-none"
                                              id="actual_final_amount_145"
                                            >
                                              153.00
                                            </p>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <button
                                              style={{ width: 100 }}
                                              className="btn btn-info small-screen-btn fs_12"
                                              data-id={145}
                                              id="pay_online_btn_145"
                                              onclick="pay_online(this)"
                                            >
                                              Pay Online
                                            </button>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <button
                                              style={{ width: "auto" }}
                                              className="btn btn-primary small-screen-btn fs_12"
                                              data-id={145}
                                              onclick="release_function(this)"
                                            >
                                              Cancel Subscription
                                            </button>
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(3, 1fr)",
                                          }}
                                        >
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          >
                                            <div className="d-flex">
                                              <label className="mt-2 me-1">
                                                Auto Renew
                                              </label>
                                              <div className="switch on_off auto_renew_subscription mt-1">
                                                <input
                                                  type="hidden"
                                                  name="is_auto_renew_145"
                                                />
                                                <label
                                                  data-id={145}
                                                  className="mb-0 mt-1"
                                                >
                                                  <input
                                                    type="checkbox"
                                                    className=""
                                                  />
                                                  <span />
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                            }}
                                          />
                                          <div
                                            style={{
                                              padding: "4px 8px",
                                              display: "grid",
                                              alignItems: "center",
                                              textAlign: "right",
                                            }}
                                          >
                                            <h6 className="mb-0">
                                              Added to basket at 15/12/2024
                                              13:13
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <button
                                          style={{ width: 100 }}
                                          className="btn btn-success small-screen-btn"
                                          data-id={145}
                                          id="pay_from_wallet_and_credit_btn_145"
                                          onclick="pay_from_wallet_and_credit(this)"
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                    <div className="action_btn mt-3">
                                      <button
                                        className="btn btn-success small-screen-btn fs_12 d-none"
                                        data-id={145}
                                        onclick="pay_from_wallet(this)"
                                      >
                                        Pay from Wallet
                                      </button>
                                    </div>
                                  </td>
                                </tr> */}
                              </tbody>
                              <tfoot>
                                <tr></tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingJob">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseJob"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseJob"
                  >
                    <div className="w-100 d-flex justify-content-between">
                      <span className="fs_15">Job</span>
                    </div>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseJob"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingJob"
                  style={{}}
                >
                  <div className="accordion-body">
                    <div className="row">
                      <div className="w-100 d-flex justify-content-end align-items-center">
                        <div className="form-check mt-1 me-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="check_all_jobs_for_payment"
                          />
                          <label
                            className="form-check-label fs_15 fw_600"
                            htmlFor="check_all_jobs_for_payment"
                          >
                            Select All
                          </label>
                        </div>
                        <span className="fs_15 fw_600 mx-1">Grand Total: </span>
                        <span className="fs_15 fw_600 me-2">
                          <span className="mdi mdi-currency-gbp" />
                          <span id="job_grand_total">0</span>
                        </span>
                        <span
                          className="btn btn-success small-screen-btn fs_12"
                          data-ids=""
                          id="basket_job_payment_btn"
                        >
                          Pay
                        </span>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table
                        id="jobBasketTable"
                        className="table"
                        style={{
                          borderCollapse: "collapse",
                          borderSpacing: 0,
                          width: "100%",
                        }}
                      >
                        <tbody />
                        <tfoot>
                          <tr></tr>
                        </tfoot>
                      </table>
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

export default Basket;
