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
                <h3 className="resume-title">Education</h3>
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
                      Mengimplementasikan pemrograman terstruktur berorientasi
                      objek,menggunakan library atau komponen pre existing dalam
                      pembuatan website e commerce sebagai desainer web{" "}
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
                  <h5>
                    <i className="">now</i>
                  </h5>
                  <p>
                    <em>PT Bangsawan Cyberindo</em>
                  </p>
                  <p>Being worked on :</p>
                  <ul>
                    <li>Developing and/or Maintenance Back-Office Pannel</li>
                    <li>
                      Developing and/or Maintenance Market-Place website,
                      contain: e-commerce app, auction app, etc.
                    </li>
                  </ul>
                </div>
                {/* <div className="resume-item">
                        <h4>Senior Web Developer</h4>
                        <h5>2019 - February 2022</h5>
                        <p><em>PT Alfath Teknologi Kreatif</em></p>
                        <ul>
                            <li>Develope and/or Maintence Given Projects and Product</li>
                            <li>Communicate with Client to discuss what and how the application will be built by him</li>
                            <li>Coordinate with Team who develop the application</li>
                            <li>Achievments : 
                                <ol>
                                    <li>
                                        Develope Hospitalty Information System V2.0 (Product)
                                    </li>
                                    <li>
                                        Develope User Booking for Hospitalty Information System (Product)
                                    </li>
                                    <li>
                                        Develope CRM System as a team
                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Web Developer</h4>
                        <h5>Maret 2022 - September 2022</h5>
                        <p><em>PT Griya Depo Nusantara</em></p>
                        <ul>
                            <li>Develope and Maintence Product</li>
                            <li>Achievment : Develope E-Commerce System V1.0 as a team</li>
                        </ul>
                    </div> */}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
