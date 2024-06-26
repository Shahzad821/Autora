import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
<FaPhoneAlt />;

const Blog = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-posts text-center">
          <Slider {...settings}>
            <div className="blog-post">
              <div>
                <FaQuoteLeft className="blog-icon" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
                blanditiis magni voluptates officia natus beatae deserunt quae
                quam ipsa temporibus quasi, porro expedita similique molestias,
                itaque nihil eos fugiat!"
              </p>
              <span>Ryan</span>
            </div>
            <div className="blog-post">
              <div>
                <FaQuoteLeft className="blog-icon" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
                blanditiis magni voluptates officia natus beatae deserunt quae
                quam ipsa temporibus quasi, porro expedita similique molestias,
                itaque nihil eos fugiat!"
              </p>
              <span>Adam</span>
            </div>
            <div className="blog-post">
              <div>
                <FaQuoteLeft className="blog-icon" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
                blanditiis magni voluptates officia natus beatae deserunt quae
                quam ipsa temporibus quasi, porro expedita similique molestias,
                itaque nihil eos fugiat!"
              </p>
              <span>Christopher</span>
            </div>
            <div className="blog-post">
              <div>
                <FaQuoteLeft className="blog-icon" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
                blanditiis magni voluptates officia natus beatae deserunt quae
                quam ipsa temporibus quasi, porro expedita similique molestias,
                itaque nihil eos fugiat!"
              </p>
              <span>Daniel</span>
            </div>
            <div className="blog-post">
              <div>
                <FaQuoteLeft className="blog-icon" />
              </div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
                blanditiis magni voluptates officia natus beatae deserunt quae
                quam ipsa temporibus quasi, porro expedita similique molestias,
                itaque nihil eos fugiat!"
              </p>
              <span>Henry</span>
            </div>
          </Slider>
        </div>
      </div>
      <div class="details">
        <div class="clipped-original">
          <p>START EXECUTING YOUR PROJECT</p>
        </div>
        <div class="clipped-line">
          {" "}
          <span>
            <FaPhoneAlt />
            +92 333 333333
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
