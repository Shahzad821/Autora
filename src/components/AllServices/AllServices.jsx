import React from "react";

import "./allservices.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiConcreteBag } from "react-icons/gi";
const AllServices = () => {
  return (
    <div className="allservicesSection">
      <div className="container ">
        <h3>ALL SERVICES</h3>
        <p className="text-center mb-5">
          Are you interested in fiending out how can we make you project a
          success? Please contact us.
        </p>
        <div className="row gx-lg-2 gy-5 gx-md-5 allservices">
          <div className="col-lg-4 col-md-6">
            <div className="flexSB">
              <i class="fa-solid fa-file-pen"></i>
              <div className="allservice">
                <h4>DESIGN-BUILD</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  excepturi minus voluptate voluptatem perferendis quasi,
                  explicabo deleniti. Excepturi, consectetur totam?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flexSB">
              <i class="fas fa-user"></i>
              <div className="allservice">
                <h4>CONSTRUCTION MANAGEMENT</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  excepturi minus voluptate voluptatem perferendis quasi,
                  explicabo deleniti. Excepturi, consectetur totam?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flexSB">
              <i class="fas fa-tools"></i>
              <div className="allservice">
                <h4>METAL BUILDING SERVICES</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  excepturi minus voluptate voluptatem perferendis quasi,
                  explicabo deleniti. Excepturi, consectetur totam?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flexSB">
              <i class="fas fa-hard-hat"></i>
              <div className="allservice">
                <h4>PRECONSTRUCTION SERVICES</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  excepturi minus voluptate voluptatem perferendis quasi,
                  explicabo deleniti. Excepturi, consectetur totam?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flexSB">
              <i class="fas fa-building"></i>
              <div className="allservice">
                <h4>BUILDING ENVELOPS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  excepturi minus voluptate voluptatem perferendis quasi,
                  explicabo deleniti. Excepturi, consectetur totam?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flexSB">
              <div>
                <GiConcreteBag className="span" />
              </div>
              <div className="allservice">
                <h4>CONCERETE STRUCTURE</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  excepturi minus voluptate voluptatem perferendis quasi,
                  explicabo deleniti. Excepturi, consectetur totam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
