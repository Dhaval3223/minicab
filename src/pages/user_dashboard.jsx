import React, { useEffect, useState } from 'react'
import Carimg1 from '../image/saloon.png';
import Userimg1 from '../image/icons/users.png';
import Userimg2 from '../image/icons/luggage.png';
import Userimg3 from '../image/estate.png';
import Userimg4 from '../image/executive.png';
import Userimg5 from '../image/people-carrier.png';
import Userimg6 from '../image/executive-people-carrier.png';
import Userimg7 from '../image/minivan.png';
import Userimg8 from '../image/minibus.png';
import Userimg9 from '../image/coaches.png';
import { Link } from 'react-router-dom';

function User_dashboard() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    const [waypoints, setWaypoints] = useState([]);

    const addWaypoint = () => {
      const newWaypoint = { id: waypoints.length + 1, value: '' };
      setWaypoints([...waypoints, newWaypoint]);
    };
  
    const removeWaypoint = (id) => {
      const updatedWaypoints = waypoints.filter((waypoint) => waypoint.id !== id);
      setWaypoints(updatedWaypoints);
    };
  
    const handleChange = (id, value) => {
      const updatedWaypoints = waypoints.map((waypoint) =>
        waypoint.id === id ? { ...waypoint, value } : waypoint
      );
      setWaypoints(updatedWaypoints);
    };

    return (
        <div>
            {/* <Header /> */}
            <section className="content_sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3">
                            <form className="form_box p-2 bg_gray">
                                <h6 className="pt-2 fw_700">Airport Transfer Quotation</h6>
                                <hr style={{ opacity: "0.1" }} />
                                <div className="row gy-3">
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input type="text" name="" placeholder="Pickup Location" />
                                        </div>
                                    </div>
                                    {waypoints.map((waypoint) => (
                                        <div key={waypoint.id} className="col-12">
                                            <label>{`Waypoint ${waypoint.id}`}</label>
                                            <span
                                                className="text-danger"
                                                style={{ marginLeft: '5px', cursor: 'pointer' }}
                                                onClick={() => removeWaypoint(waypoint.id)}
                                            >
                                                <i className="fa-solid fa-circle-xmark"></i>
                                            </span>
                                            <div className="input_grp">
                                                <input
                                                    type="text"
                                                    name={`waypoint-${waypoint.id}`}
                                                    placeholder="Waypoint"
                                                    value={waypoint.value}
                                                    onChange={(e) => handleChange(waypoint.id, e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input type="text" name="" placeholder="Drop Off Location" />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button type="button" className="button_1 fs_13" onClick={addWaypoint}>
                                            + Add Waypoint
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <button type="button" className="button_1 fs_13">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-6 px-xl-0">
                            <div className="my_list bg_gray p-2">
                                <h6 className="pt-2 fw_700">Your Cars</h6>
                                <hr style={{ opacity: "0.1" }} />
                                <div className="row g-2">
                                    <div className="col-lg-3">
                                        <div className="bg-white p-3 py-4 text-center">
                                            <h6 className="fw_700 text-muted">Saloon</h6>
                                            <img
                                                src={Carimg1}
                                                className="my-3 img-fluid"
                                            />
                                            <p className="para fs_14 d-flex align-items-center mb-1">
                                                <img
                                                    src={Userimg1}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;3 passengers
                                            </p>
                                            <p className="para fs_14 d-flex align-items-center mb-0">
                                                <img
                                                    src={Userimg2}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;2x20 kg's suitcases
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white p-3 py-4 text-center">
                                            <h6 className="fw_700 text-muted">Estate</h6>
                                            <img
                                                src={Userimg3}
                                                className="my-3 img-fluid"
                                            />
                                            <p className="para fs_14 d-flex align-items-center mb-1">
                                                <img
                                                    src={Userimg1}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;3 passengers
                                            </p>
                                            <p className="para fs_14 d-flex align-items-center mb-0">
                                                <img
                                                    src={Userimg2}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;2x20 kg's suitcases
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white p-3 py-4 text-center">
                                            <h6 className="fw_700 text-muted">Executive</h6>
                                            <img
                                                src={Userimg4}
                                                className="my-3 img-fluid"
                                            />
                                            <p className="para fs_14 d-flex align-items-center mb-1">
                                                <img
                                                    src={Userimg1}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;3 passengers
                                            </p>
                                            <p className="para fs_14 d-flex align-items-center mb-0">
                                                <img
                                                    src={Userimg2}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;2x20 kg's suitcases
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white p-3 py-4 text-center">
                                            <h6 className="fw_700 text-muted">People Carrier</h6>
                                            <img
                                                src={Userimg5}
                                                className="my-3 img-fluid"
                                            />
                                            <p className="para fs_14 d-flex align-items-center mb-1">
                                                <img
                                                    src={Userimg1}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;3 passengers
                                            </p>
                                            <p className="para fs_14 d-flex align-items-center mb-0">
                                                <img
                                                    src={Userimg2}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;2x20 kg's suitcases
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white p-3 py-4 text-center">
                                            <h6 className="fw_700 text-muted">Executive People Carrier</h6>
                                            <img
                                                src={Userimg6}
                                                className="my-3 img-fluid"
                                            />
                                            <p className="para fs_14 d-flex align-items-center mb-1">
                                                <img
                                                    src={Userimg1}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;3 passengers
                                            </p>
                                            <p className="para fs_14 d-flex align-items-center mb-0">
                                                <img
                                                    src={Userimg2}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;2x20 kg's suitcases
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white p-3 py-4 text-center">
                                            <h6 className="fw_700 text-muted">Minivan</h6>
                                            <img
                                                src={Userimg7}
                                                className="my-3 img-fluid"
                                            />
                                            <p className="para fs_14 d-flex align-items-center mb-1">
                                                <img
                                                    src={Userimg1}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;3 passengers
                                            </p>
                                            <p className="para fs_14 d-flex align-items-center mb-0">
                                                <img
                                                    src={Userimg2}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;2x20 kg's suitcases
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white p-3 py-4 text-center">
                                            <h6 className="fw_700 text-muted">Minibus</h6>
                                            <img
                                                src={Userimg8}
                                                className="my-3 img-fluid"
                                            />
                                            <p className="para fs_14 d-flex align-items-center mb-1">
                                                <img
                                                    src={Userimg1}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;3 passengers
                                            </p>
                                            <p className="para fs_14 d-flex align-items-center mb-0">
                                                <img
                                                    src={Userimg2}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;2x20 kg's suitcases
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="bg-white p-3 py-4 text-center">
                                            <h6 className="fw_700 text-muted">Coaches</h6>
                                            <img
                                                src={Userimg9}
                                                className="my-3 img-fluid"
                                            />
                                            <p className="para fs_14 d-flex align-items-center mb-1">
                                                <img
                                                    src={Userimg1}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;3 passengers
                                            </p>
                                            <p className="para fs_14 d-flex align-items-center mb-0">
                                                <img
                                                    src={Userimg2}
                                                    height={14}
                                                    style={{ opacity: "0.5" }}
                                                />
                                                &nbsp;&nbsp;2x20 kg's suitcases
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <form className="form_box p-2 bg_gray">
                                <h6 className="pt-2 fw_700">Passenger Details</h6>
                                <hr style={{ opacity: "0.1" }} />
                                <div className="row gy-3">
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input type="text" name="" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input type="email" name="" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input type="text" name="" placeholder="Mobile" />
                                        </div>
                                    </div>
                                    {/* <div className="col-6">
                                        <div className="input_grp">
                                            <input type="number" name="" placeholder="Luggage" />
                                        </div>
                                    </div> */}
                                    <div className="col-6">
                                        <div className="input_grp">
                                            <select>
                                                <option value="">Luggage</option>
                                                <option value="">None</option>
                                                <option value="">Hand Luggage</option>
                                                <option value="">Suitcases</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input_grp">
                                            <input type="number" name="" placeholder="No. of Passenger" />
                                        </div>
                                    </div>
                                    <h6 className="pt-1 fw_700">Passenger Details</h6>
                                    <hr className="my-1" style={{ opacity: "0.1" }} />
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input type="text" name="" placeholder="Flight No." />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input_grp">
                                            <input type="text" name="" placeholder="Arriving From" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input_grp">
                                            <input type="text" name="" placeholder="Meet & Greet" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input_grp">
                                            <input type="date" name="" placeholder="Date" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input_grp">
                                            <input type="time" name="" placeholder="Time" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <textarea
                                                placeholder="Special Instructions"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <h6 className="pt-1 fw_700">Passenger Details</h6>
                                    <hr className="my-1" style={{ opacity: "0.1" }} />
                                    <div className="col-12">
                                        <div className="input_grp">
                                            <input type="text" name="" placeholder="Realistic Fare (£)" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Link to={"/break_down"} className="button_1 fs_13 w-100">
                                            Continue
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </div>
    )
}

export default User_dashboard