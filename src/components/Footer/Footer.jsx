import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerDetail">
          <div className="row gy-5">
            <div className=" col-lg col-md-6 icons">
              <h3>
                <img src="src/assets/logo.png" alt="" /> Autora
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                atque.
              </p>
              <div className="iconContainer">
                <span>
                  <i class="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i class="fa-brands fa-instagram"></i>
                </span>
                <span>
                  <i class="fa-brands fa-twitter"></i>
                </span>
              </div>
            </div>
            <div className="col-lg col-md-6">
              <h3>Services</h3>
              <ul className="px-0">
                <li>
                  <a href="">Space Planning</a>
                </li>
                <li>
                  <a href="">Furniture Selection and Placement</a>
                </li>
                <li>
                  <a href="">Color Scheme Consultation</a>
                </li>
                <li>
                  <a href="">Lighting Design</a>
                </li>
                <li>
                  <a href="">Interior Decoration</a>
                </li>
                <li>
                  <a href="">Customization and Styling</a>
                </li>
              </ul>
            </div>
            <div className="col-lg col-md-6">
              <h3>Company</h3>
              <ul className="px-0">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Meet Our Team</a>
                </li>
                <li>
                  <a href="">News And Media</a>
                </li>
                <li>
                  <a href="">Case Studies</a>
                </li>
                <li>
                  <a href="">Contacts</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-lg col-md-6">
              <h3>Newsletter</h3>
              <p>
                Sign up for our lastes news ,thoughts and insights from Autora.
              </p>
              <input type="text" placeholder="Your Email Address" />
              <p>
                Have a question?<span>Click Here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerDown ">
        <span>Terms & Conditions - PrivacyPolicy </span>
        <span>©2024 Autora</span>
      </div>
    </div>
  );
};

export default Footer;
