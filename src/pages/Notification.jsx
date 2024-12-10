import React from 'react';
import './notif.css'
function Notification() {
    return (
        <div className="container my-4">
            {/* Scrolling Message */}
            <div className="bg-warning text-dark py-2 mb-3 text-center">
                <marquee behavior="scroll" direction="left">
                    <strong>Scroll Messages moving from right to left</strong>
                </marquee>
            </div>

            {/* Main Content */}
            <div className="row">
                {/* Notice Board */}
                <div className="col-md-4">
                    <div className="border border-warning rounded p-3 h-100">
                        <h5 className="text-center bg-warning text-dark py-2">NOTICE BOARD</h5>
                        <div className="my-3">
                            <p>
                                <strong>Subscription:</strong> Subscription ends on 31st December 2024
                            </p>
                            <p>
                                <strong>Documents:</strong>
                            </p>
                            <ul>
                                <li>Your insurance renewal is due on 31st January 2025</li>
                                <li>Your driving license is due for renewal on 31st December 2024</li>
                            </ul>
                        </div>
                        <div className="bg-danger text-white p-2 rounded">
                            <strong>URGENT</strong>
                            <ul className="mb-0">
                                <li>1 Subscription waiting in basket for payment</li>
                                <li>3 Jobs in basket waiting for payment</li>
                                <li>5 Jobs accepted by Vendor</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Follow Ups */}
                <div className="col-md-8">
                    <div className="row">
                        {/* Merchant Section */}
                        <div className="col-md-6">
                            <div className="border border-warning rounded p-3 h-100">
                                <h5 className="text-center bg-warning text-dark py-2">Merchant</h5>
                                <table className="table table-bordered text-center">
                                    <tbody>
                                        <tr>
                                            <td>Today's Job</td>
                                            <td>5 Jobs</td>
                                        </tr>
                                        <tr>
                                            <td>Tomorrow's Job</td>
                                            <td>4 Jobs</td>
                                        </tr>
                                        <tr>
                                            <td>Jobs in Market</td>
                                            <td>4 Jobs</td>
                                        </tr>
                                        <tr>
                                            <td>Jobs in Auction</td>
                                            <td>5 Jobs</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Vendor Section */}
                        <div className="col-md-6">
                            <div className="border border-primary rounded p-3 h-100">
                                <h5 className="text-center bg-primary text-white py-2">Vendor</h5>
                                <table className="table table-bordered text-center">
                                    <tbody>
                                        <tr>
                                            <td>Today's Assignments</td>
                                            <td>3 Jobs</td>
                                        </tr>
                                        <tr>
                                            <td>Tomorrow's Assignments</td>
                                            <td>8 Jobs</td>
                                        </tr>
                                        <tr>
                                            <td>Jobs Applied</td>
                                            <td>10 Jobs</td>
                                        </tr>
                                        <tr>
                                            <td>Jobs Quoted</td>
                                            <td>12 Jobs</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;
