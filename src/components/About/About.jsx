import React from "react";
import { GiAchievement } from "react-icons/gi";
import { FaStopwatch } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { IoIosCheckbox } from "react-icons/io";
import { IoIosCheckboxOutline } from "react-icons/io";

import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
  return (
    <div className="about">
      <div className="container text-center">
        <h3>YOUR BEST CHOOSE</h3>
        <p className="mb-4">
          More than 500 projects completed in autora.With 25 years of combined{" "}
          experience.We have the knowledge to serve you.
        </p>
        <div className="row gy-5 aboutSection">
          <div className="col-lg col-md-6 px-4">
            <GiAchievement className="icon mb-3" />

            <h5>BEST QUALITY</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              explicabo maxime? Voluptate iusto inventore qui?Lorem ipsum dolor
              sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-lg col-md-6 px-4">
            <FaStopwatch className="icon mb-3" />

            <h5>ON TIME</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              explicabo maxime? Voluptate iusto inventore qui? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-lg col-md-6 px-4 mx-md-auto">
            <GrUserWorker className="icon mb-3" />

            <h5>EXPERIENCED</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              explicabo maxime? Voluptate iusto inventore qui?Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <button className="button mb-5">About us</button>
      </div>
      <div className="aboutAtoura">
        <div className="row gx-0">
          <img src="src/assets/tools.png" alt="" className="col-lg col-md-5 " />
          <div className="aboutSection col-lg col-md-7">
            <h4 className="mb-4">WELCOME TO AUTORA</h4>
            <p>
              We have successfully completed projects places across the country.
              Autora Construction has a proven track of:
            </p>
            <p>
              <span> </span>
              Elevated quality of workmanship.
            </p>
            <p>
              <span> </span>
              Completing projects on time and following guidelines.
            </p>
            <p>
              <span style={{ color: "rgb(241, 189, 37)" }}> </span>
              Ensuring accurate and timely completion of daily progress reports.
            </p>
            <p>
              <span> </span>
              Adhering strictly to safety protocols and regulations on-site.
            </p>
            <button className="btn mt-3 mb-3">GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
