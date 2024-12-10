import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { baseUrl, reset_url } from '../utils/Url';
import { toastError, toastSuccess } from '../utils/Notifycustom';

function Change_password() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  
  useEffect(() => {
    const token = localStorage.getItem('Reset-password-token');
    const email = localStorage.getItem('Reset-password-email');

    // If either token or email is missing, redirect to reset_password page
    if (!token || !email) {
      navigate('/reset_password'); // Replace with your actual reset password page path
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const token = localStorage.getItem('Reset-password-token');
      const email = localStorage.getItem('Reset-password-email');

      if (!token || !email) {
        navigate('/reset_password');
        return;
      }

      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', newPassword);
      formData.append('confirm_password', confirmPassword);
      formData.append('token', token);

      const response = await axios.post(`${baseUrl}${reset_url}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        toastSuccess(response?.data?.message);
        localStorage.removeItem('Reset-password-token');
        localStorage.removeItem('Reset-password-email');
        navigate('/login');
      }
    } catch (error) {
      const errorData = error?.response?.data?.message;
      const errorMessage = errorData && typeof errorData === 'object'
        ? Object.values(errorData).flat().join(", ")
        : errorData || "An error occurred. Please try again.";

      toastError(errorMessage);
      console.log(error); // Optional: log full error for debugging
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="login_register py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 ps-lg-5 text-lg-start text-center">
              <h3 className="main_heading fw_700 text-white">Welcome to</h3>
              <h1 className="fs_50 fw_600 text-white" style={{ width: "max-content" }}>
                Minicab Network
                <hr className="bg_yellow" style={{ height: 2, opacity: "0.7" }} />
              </h1>
              <p className="fs_14 para mb-0 text-white">
                C2 solves the root causes of these problems – and delivers significant
                value. Join us and start building your trust today.
              </p>
            </div>
            <div className="offset-lg-2 col-lg-5 pe-lg-5">
              <form className="form_box" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 text-lg-start text-center">
                    <h2 className="main_heading mb-1">Reset Password</h2>
                    <p className="para fs_14 fw_600 mb-0">
                      To reset your password, enter your username and email address below, and a reset link will be emailed to you shortly.
                    </p>
                  </div>

                  <div className="col-12">
                    <label> New Password </label>
                    <div className="input_grp">
                      <input
                        type={changePassword ? "text" : "password"}
                        placeholder="********"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                      <span onClick={() => setChangePassword(!changePassword)} style={{ cursor: 'pointer' }}>
                        {changePassword ? <FaEyeSlash className="usericon" /> : <FaEye className="usericon" />}
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <label>Confirm Password</label>
                    <div className="input_grp">
                      <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        placeholder="********"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <span onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} style={{ cursor: 'pointer' }}>
                        {confirmPasswordVisible ? <FaEyeSlash className="usericon" /> : <FaEye className="usericon" />}
                      </span>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="col-12">
                      <p className="text-danger">{errorMessage}</p>
                    </div>
                  )}

                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="button_1 w-100" disabled={loading}>
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                    <p className="para fs_14 fw_600 mt-3 mb-0">
                      Not a member yet?{" "}
                      <Link to="/registration" className="li_su">
                        Sign up here
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Change_password;
