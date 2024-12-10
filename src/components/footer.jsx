import React from 'react'
import Footerimg1 from '../image/facebook.svg';
import Footerimg2 from '../image/twitter.svg';
import Footerimg3 from '../image/youtube.svg';
import Footerimg4 from '../image/linkedin.svg';
import { Link } from 'react-router-dom';
function footer() {
  return (
    <div>
      <>
        <footer>
          <div className="footer_top">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-7">
                  <a href="" className="footer_logo">
                    Minicab Network
                  </a>
                  <br />
                  <h5>Contact Us</h5>
                  <ul>
                    <li>
                      <a href="">(847) 673-0300</a>
                    </li>
                    <li>
                      <a href="">sales@Minicabnetwork.com</a>
                    </li>
                    <li>
                      <a href="">7355 - Monticello Ave, Skokie, IL 60076</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-5">
                  <h5>Quick Links</h5>
                  <ul>
                    <li>
                      <Link to="/" className="fs_12">
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link to="/how_it_works" className="fs_12">
                        HOW IT WORKS
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="fs_12">
                        PRICING
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" className="fs_12">
                        FAQS
                      </Link>
                    </li>
                    <li>
                      <a href="terms_condition.php" className="fs_12">
                        TERMS &amp; CONDITIONS
                      </a>
                    </li>
                    <li>
                      <Link to="/contact" className="fs_12">
                        CONTACT US
                      </Link>
                    </li>
                    <li>
                      <Link to="/aboutus" className="fs_12">
                      About Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5">
                  <h5>Popular Minicab Network</h5>
                  <p>
                    Dover Cruise Terminal | Greenock Cruise Terminal | Liverpool
                    Cruise Terminal | London-City Cruise Terminal | Tilbury Cruise
                    Terminal | Newcastle Cruise Terminal | Southampton Cruise Terminal
                    | Dover Ferry Port | Portsmouth Ferry Port | Southampton Red
                    Funnel Ferry Port | Southsea Ferry Port
                  </p>
                  <h5>Follow Us</h5>
                  <ul className="social_media">
                    <li>
                      <a href="">
                        <img src={Footerimg1} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={Footerimg2} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={Footerimg3} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={Footerimg4} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p className="mb-0 fs_14 fw_700">
                    © 2024 All rights reserved to Minicab Network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <link
          rel="stylesheet"
          href="https://www.pitthungama.com/viewer_assets/animation/animate.css"
          type="text/css"
        />
      </>

    </div>
  )
}

export default footer