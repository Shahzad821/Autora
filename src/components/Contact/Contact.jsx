import React from "react";
import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="container">
        <div className="row contact">
          <div className="col-md-6 contactLeft">
            <div className="leftUp">
              <h3>Our Location</h3>
              <p>
                Lahore,Punjab <br />
                Pakistan
              </p>
              <h3>Quick Contact</h3>
              <p>
                Email: autora@info.com <br />
                Support: autora@info.com
              </p>
            </div>
            <div className="leftdown">
              <p>
                We will get back to you within <br />
                24 hours,or call us everyday,
                <br />
                9:00 AM-12:00 PM
              </p>
              <span>
                <i className="fa-solid fa-phone"></i>
                +92 333 3333333
              </span>
            </div>
          </div>
          <div className="col-md-6 contactRight">
            <h3>Request A Quote</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              illo minus voluptas suscipit. Incidunt maxime dicta, saepe amet
              expedita hic!
            </p>
            <div className="row">
              <div className="col-lg-12">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="col-lg-12">
                <input type="number" placeholder="Phone" />
              </div>
              <div className="col-lg-12">
                <textarea
                  name=""
                  id=""
                  rows="4"
                  cols="50"
                  placeholder=" Detail List"
                  className="textarea"
                ></textarea>
              </div>
            </div>

            <div className="contactBtn ">
              <button className="button">Submit</button>

              <div className="radio ">
                <input type="radio" />
                <span>I accept the privacy and terms.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
