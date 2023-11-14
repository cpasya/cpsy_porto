import React, { Component, useCallback } from "react";

//plugin
import { Button } from "react-bootstrap";
// import Particles from 'react-tsparticles'
// import { loadFull } from "tsparticles";

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Resume</h2>
              <p>
                Fews description about my projects and experience/skill that
                I've been working on
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Certificate</h3>
                {/* <div className="resume-item">
                            <h4>Informatic Engineering</h4>
                            <h5>2015 - 2020</h5>
                            <p><em>The State Islamic University of Maulana Malik Ibrahim Malang</em></p>        
                        </div> */}
                <div className="resume-item">
                  <h4>Babastudio Course</h4>
                  <h5>Juny 2022 - July 2022</h5>
                  <p>
                    <em>
                      Applying structured object-oriented programming, using
                      pre-existing libraries or components in creating
                      e-commerce websites as a web designer
                      <b>(React)</b>
                    </em>
                  </p>
                  <p>
                    <a
                      href="https://drive.google.com/drive/folders/1dWx5ct3KoKszjTz6bRziPFLtXJr5L9Mj?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      <Button primary="true">Certificate</Button>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Junior Web Developer</h4>
                  <h5>August 2022 - November 2022</h5>
                  <p>
                    <em>at PT Bangsawan Cyberindo Indonesia</em>
                  </p>
                  <ul>
                    <li>Developed a Back-Office Pannel</li>
                    <li>
                      Assisted the development team in maintaining Marketplace
                      website.
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>FrontEnd Developer</h4>
                  <h5>November 2022 - September 2023</h5>
                  <p>
                    <em>at PT Bangsawan Cyberindo Indonesia</em>
                  </p>
                  <ul>
                    <li>
                      Utilized HTML, CSS, JavaScript Library (React.js), and PHP
                      Framework (Laravel) to create Main responsive landing page
                      for the Marketplace application.
                    </li>
                    <li>
                      Assisted the development team in maintaining the 8 apps
                      that are part of the Marketplace application.
                    </li>
                    <li>
                      Implemented frontend technical solutions to meet project
                      requirements for the creation of the Marketplace
                      application.
                    </li>
                    <li>
                      Partnered with backend developer to develop and maintain
                      Admin Panel using React.js and Laravel, also Integrated a
                      Restful API (CRUD) from the backend using Insomnia or
                      Postman.
                    </li>
                    {/* <li>
                      Designed an Admin Panel for 8 apps that are part of the
                      Marketplace application using Figma and Ant Design.
                    </li> */}
                    <li>
                      Achievements :
                      <ol>
                        <li>
                          Developed a main responsive landing page for the
                          Marketplace application.
                        </li>
                        <li>
                          Designed and Developed an Admin Panel for 8 apps that
                          are part of the Marketplace application.
                        </li>
                        <li>Developed a CRM System as a team</li>
                      </ol>
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Software Developer</h4>
                  <h5>Oktober 2023 - Present</h5>
                  <p>
                    <em>
                      at Directorate of Airworthiness and Aircraft Operations
                    </em>
                  </p>
                  <ul>
                    <li>
                      Develop and maintain all existing applications
                      {/* (about ±10 apps) */}
                    </li>
                    <li>...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
