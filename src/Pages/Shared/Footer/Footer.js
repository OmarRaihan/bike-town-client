import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div class="footer-clean">
      <footer>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-4 col-md-3 item">
              <h3>Products</h3>
              <ul>
                <li>
                  <a href="#bikes">Bikes</a>
                </li>
                <li>
                  <a href="#kits">Riding Kits</a>
                </li>
                <li>
                  <a href="#spares">Spares Parts</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#company">Company</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#legacy">Legacy</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li>
                  <a href="#job">Job openings</a>
                </li>
                <li>
                  <a href="#employee">Employee success</a>
                </li>
                <li>
                  <a href="#benefits">Benefits</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 item social">
              <a href="#facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#linkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <p class="copyright">All rights reserved &copy; {year}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
