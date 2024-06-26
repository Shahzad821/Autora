import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./services.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h3>BEST SERVICES</h3>
        <p>
          Construciton services offers a full range of construction services
          from input desgin to completion
        </p>
        <div className="row gy-5 ">
          <div className="col-lg col-md-6 service">
            <img src="src/assets/design.jpg" alt="" />
            <div className="servicePara">
              <p className="mb-0 px-2">DESIGN & BUILD </p>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
          <div className="col-lg col-md-6 service ">
            <img
              src="src/assets/tools.png"
              alt=""
              style={{
                backgroundColor: "#eaeaec",
                borderBottom: "1px solid grey",
              }}
            />
            <div className="servicePara">
              <p className="mb-0 px-2">DEVELOPING ENVELOPES</p>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
          <div className="col-lg col-md-6 service mx-md-auto">
            <img src="src/assets/construction1.jpg" alt="" />
            <div className="servicePara">
              <p className="mb-0 px-2">CONSTRUCTION MANAGEMENTS </p>
              <span>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
        <button className="button mt-5 ">ALL SERVICES</button>
      </div>
    </div>
  );
};

export default Services;
