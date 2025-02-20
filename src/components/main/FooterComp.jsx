import React, { Component } from "react";
import ThansWord from "../UI/ThanksUI/thanks";

export default class FooterComp extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          {/* <h3>
            Thank You! <span style={{ fontSize: "38px" }}>&#128513;</span>
          </h3> */}
          {/* <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> */}
          <div className="social-links">
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
              href="https://www.linkedin.com//in/m-c-pasya-b780a8267/"
              className="linkedin"
              target={"_blank"}
              rel={["noopener noreferrer"]}
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <div className="copyright">
            {/* <ThansWord /> */}
            &copy; 2024 Copyright{" "}
            <strong>
              <span>CPasya</span>
            </strong>
            . All Rights Reserved
          </div>
          {/* <div className="credits">
            Template Designed by{" "}
            <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div> */}
        </div>
      </footer>
    );
  }
}
