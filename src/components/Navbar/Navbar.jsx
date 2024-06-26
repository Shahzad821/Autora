import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row Nav">
          <div className="col-2 title">
            <img src="src/assets/logo.png" alt="" />
            <h3>AUTORA</h3>
          </div>
          <ul className={`col-9 ${toggle ? "menu" : ""}`}>
            <li>
              <Link
                to="Hero"
                offset={-70}
                smooth={true}
                duration={500}
                className={active === "home" ? "active" : ""}
                onClick={() => setActive("home")}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="about"
                offset={-60}
                smooth={true}
                duration={500}
                className={active === "about" ? "active" : ""}
                onClick={() => setActive("about")}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-70}
                className={active === "services" ? "active" : ""}
                onClick={() => setActive("services")}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                offset={-170}
                className={active === "projects" ? "active" : ""}
                onClick={() => setActive("projects")}
              >
                PROJECTS
              </Link>
            </li>

            <li>
              <Link
                to="blog"
                smooth={true}
                duration={500}
                offset={-70}
                className={active === "blog" ? "active" : ""}
                onClick={() => setActive("blog")}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className={active === "contact" ? "active" : ""}
                onClick={() => setActive("contact")}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <i>
                <CiSearch />
              </i>
            </li>
          </ul>
          <span onClick={() => setToggle(!toggle)} className="col-1 menuBar">
            {toggle ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
