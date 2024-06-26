import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsFillTicketDetailedFill } from "react-icons/bs";
import "./project.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Project = () => {
  return (
    <div className="projectSection">
      <div className="container text-center">
        <h3>FEARURED PROJECT</h3>
        <div className="row projects gy-sm-3">
          <div className="col-lg col-md-6 project">
            <img src="src/assets/project1.jpg" alt="" />
            <div className="projectDetail">
              <div className="projectIcons">
                <span>
                  <CiSearch className="Icon" />
                </span>
                <span>
                  <BsFillTicketDetailedFill className="Icon" />
                </span>
              </div>
              <h5>LAKE MEADOWS APARTMENTS</h5>
              <p>ARCHITECTURE | DESIGN</p>
            </div>
          </div>
          <div className="col-lg col-md-6 project">
            <img src="src/assets/project2.jpg" alt="" />
            <div className="projectDetail">
              <div className="projectIcons">
                <span>
                  <CiSearch className="Icon" />
                </span>
                <span>
                  <BsFillTicketDetailedFill className="Icon" />
                </span>
              </div>
              <h5>CASCADE VISTA APARTMENTS</h5>
              <p>ARCHITECTURE | DESIGN</p>
            </div>
          </div>
          <div className="col-lg col-md-6  project">
            <img src="src/assets/project3.jpg" alt="" />
            <div className="projectDetail">
              <div className="projectIcons">
                <span>
                  <CiSearch className="Icon" />
                </span>
                <span>
                  <BsFillTicketDetailedFill className="Icon" />
                </span>
              </div>
              <h5>SUMMIT PEAK RESIDENCES</h5>
              <p>ARCHITECTURE | DESIGN</p>
            </div>
          </div>
          <div className="col-lg col-md-6 project">
            <img src="src/assets/project4.jpg" alt="" />
            <div className="projectDetail">
              <div className="projectIcons">
                <span>
                  <CiSearch className="Icon" />
                </span>
                <span>
                  <BsFillTicketDetailedFill className="Icon" />
                </span>
              </div>
              <h5>RIVERGLEN HEIGHTS APARTMENTS</h5>
              <p>ARCHITECTURE | DESIGN</p>
            </div>
          </div>
        </div>
        <button className="button mt-5">ALL PRODUCTS</button>
      </div>
    </div>
  );
};

export default Project;
