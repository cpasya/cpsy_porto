import React, { Component } from "react";

import Aos from "aos";
import Typed from "typed.js";
import "./HeroBabel.css";
import SpotlightEffect from "./spotlight";

export default class HeroBabel extends Component {
  componentDidMount() {
    setTimeout(() => Aos.init(), 500);

    let typed = new Typed("#typed", {
      strings: ["Software Developer", "Web Developer", "UI/UX Designer"],
      typeSpeed: 50,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "/",
    });
  }

  render() {
    return (
      <section
        id="heroBabel"
        // style={{
        //   backgroundImage: "url(/assets/img/tanjakan13_day_psy.jpg)",
        //   width: "100%",
        // }}
        // className="d-flex flex-column justify-content-center"
        className="d-flex flex-column justify-content-center hero"
      >
        <div className="hero-title container">
          Muhammad Chaerul Pasya
          <div className="social-links">
            {/* <a href="#" className="twitter">
                        <i className="bx bxl-twitter"></i>
                    </a> */}
            <a
              href="https://www.facebook.com/muhammad.pasya.7"
              className="facebook"
              target={"_blank"}
              rel={["noopener noreferrer"]}
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/cpasya"
              className="instagram"
              target={"_blank"}
              rel={["noopener noreferrer"]}
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://github.com/cpasya"
              className="google-plus"
              target={"_blank"}
              rel={["noopener noreferrer"]}
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/m-c-pasya-b780a8267/"
              className="linkedin"
              target={"_blank"}
              rel={["noopener noreferrer"]}
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
        <h1 className="hero-subtitle container">
          <p>
            I'm{" "}
            <span
              className="typed"
              id="typed"
              data-typed-items=" a Developer, Front-End Engineering"
            ></span>
          </p>
        </h1>

        <div className="spotlight">
          <SpotlightEffect />
        </div>
      </section>
    );
  }
}

<script></script>;
