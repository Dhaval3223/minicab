import React, { useState } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headerimg1 from "../image/icons/home.png";
import Headerimg2 from "../image/icons/hiw.png";
import Headerimg3 from "../image/icons/pricing.png";
import Headerimg4 from "../image/icons/terms.png";
import Headerimg5 from "../image/icons/faq.png";
import Headerimg6 from "../image/icons/email.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "../redux/action";
import profileimg from '../image/dog1.png'
import { FcAbout } from "react-icons/fc";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.gameData);
  const user = localStorage.getItem("token");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // Implement your logout functionality here
    localStorage.removeItem("token");
    window.location.reload();
    setIsMenuOpen(false);
  };

  return (
    <nav id="menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-9">
            <div className="logo">
              <Link to="/" className="logo_text">
                MINICAB NETWORK
              </Link>
              <span>
                <a href="+44123456789">+44123456789</a> |{" "}
                <a href="mailto:sale@minicab.com">sale@minicab.com</a>
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-3">
            <ul className={`menu ${isMenuOpen ? "menu_open" : ""}`}>
              <li className={`${location.pathname === "/" ? "active" : ""}`}>
                <Link to="/" onClick={toggleMenu}>
                  <img src={Headerimg1} alt="Home" /> Home
                </Link>
              </li>
              <li className={`${location.pathname === "/how_it_works" ? "active" : ""}`}>
                <Link to="/how_it_works" onClick={toggleMenu}>
                  <img src={Headerimg2} alt="How it works" /> How it works
                </Link>
              </li>
              <li className={`${location.pathname === "/pricing" ? "active" : ""}`}>
                <Link to="/pricing" onClick={toggleMenu}>
                  <img src={Headerimg3} alt="Pricing" /> Pricing
                </Link>
              </li>
              <li className={`${location.pathname === "/terms_condition" ? "active" : ""}`}>
                <Link to="/terms_condition" onClick={toggleMenu}>
                  <img src={Headerimg4} alt="Terms and conditions" /> Terms
                </Link>
              </li>
              <li className={`${location.pathname === "/faq" ? "active" : ""}`}>
                <Link to="/faq" onClick={toggleMenu}>
                  <img src={Headerimg5} alt="FAQ" /> FAQ
                </Link>
              </li>
              <li className={`${location.pathname === "/contact" ? "active" : ""}`}>
                <Link to="/contact" onClick={toggleMenu}>
                  <img src={Headerimg6} alt="Contact Us" /> Contact Us
                </Link>
              </li>
              <li className={`${location.pathname === "/aboutus" ? "active" : ""}`}>
                <Link to="/aboutus" onClick={toggleMenu}>
                  <FcAbout size={18} />  About Us
                </Link>
              </li>
              {user ? (
               
               <li className="rounded-circle border border-warning p-1">
               <Link to="/profile" onClick={toggleMenu}>
                 <img src={profileimg} alt="" className="img-fluid rounded-circle" style={{height:'30px',width:'30px'}} />
               </Link>
             </li>
               
              ) : (
                <li className="btn_a">
                  <Link to="/login" onClick={toggleMenu}>
                    Signup / Login
                  </Link>
                </li>
              )}
            </ul>
            <div
              className={`bar_line toggleNav ${isMenuOpen ? "bar_line_open" : ""}`}
              onClick={toggleMenu}
            >
              <div>
                {/* <span />
                <span />
                <span />
                <span /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
