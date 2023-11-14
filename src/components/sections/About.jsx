import React, { Component } from "react";

//plugin
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faReact,
  faJs,
  faPhp,
  faLaravel,
  faNodeJs,
  faGit,
  faGithub,
  faGitAlt,
  faCpanel,
  faPlaystation,
  faFigma,
  faAd,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import {
  faCompassDrafting,
  faFire,
  faFireAlt,
  faFireBurner,
  faFireFlameCurved,
  faPeopleGroup,
  faPlaceOfWorship,
  faPlay,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";

export default class About extends Component {
  componentDidMount() {
    const tooltip = tippy("#question-freelance", {
      content:
        'Although I’m not currently looking for freelance opportunities <span style="color: #ABCA81">due some reasons</span>, my inbox is always open. Whether you have a question or just want to say hi, <span style="color: #ABCA81">I’ll try my best to get back to you!</span>',
      allowHTML: true,
      animateFill: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
              {/* <p>
                Hello, I'm Pasya. My relationship with Technology started when I
                was in senior high school, specifically when I play games almost
                every time. Grateful, I became Programmer now, that proficient
                in UI/UX and Front-End Developer for a year. I really enjoyed
                when designing/developing Front Page of the apps.
              </p> */}
            </div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="/assets/img/profile_linkedin_pasya_cropped.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>My Biography</h3>
                <p className="">
                  First of all let me introduce some facts about myself, as
                  below :
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>21</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>(+62)877-2372-6501</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Bogor, Indonesia</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      {/* <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Bachelor</span>
                      </li> */}
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>
                          <a
                            style={{ color: "blue", textDecoration: "none" }}
                            href="pasya0129@gmail.com"
                          >
                            pasya0129@gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Freelance:</strong>{" "}
                        <span>
                          Not Available{" "}
                          <a href="#" id="question-freelance">
                            {" "}
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                            ></FontAwesomeIcon>
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <p className="mt-5">
                  I also often buy some courses to levelling up my skill.
                  Perhaps some day, I can mastering DevOps Skills and others
                  Back-End Technologies because it's very challenging for me. As
                  a software engineer, I like to write code as a simply and
                  functionally that perhaps can increase the performance in
                  building some software-apps. Also this is one of my experience
                  that I got during became software engineer.
                </p> */}
                <p className="mt-5">
                  I'm a person who likes discovering something new and eager to
                  learn many new things to grow and expand my skill set,
                  interested in the topics of technology, web or app
                  development, and visual design. Specialize in front-end
                  development for a year and always keep up-to-date with the
                  latest design and technology trends to create engaging user
                  interfaces and user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="skills facts section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                Here are a few technologies I’ve been working or learning with
                recently.
              </p>
            </div>

            <div className="row skills-content">
              <div className="col-md-4">
                <div className="row">
                  <div className="col text-center">
                    <h5>
                      <b>Front End Stacks</b>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faHtml5}
                        style={{
                          background: "#E56128",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>HTML</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faCss3}
                        style={{
                          background: "#146CAD",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>CSS</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faJs}
                        style={{
                          background: "#EAD41C",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>Javascript</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faReact}
                        style={{
                          background: "#5BCEEE",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>React</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faPhp}
                        style={{
                          background: "#802bcff9",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>PHP</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faLaravel}
                        style={{
                          background: "#ec8251",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>Laravel</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col text-center">
                    <h5>
                      <b>UI / UX Stacks</b>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col">
                                    <div className="count-box mt-0">
                                        <FontAwesomeIcon icon={faNodeJs} style={{ 
                                            background: '#619561',
                                            borderRadius: '50px',
                                            height: '48px',
                                            width: '48px',
                                            fontSize: '24px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'

                                        }}></FontAwesomeIcon> */}
                  {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                  {/* <p>
                                        <b>Node JS</b>
                                        </p> */}
                  {/* </div>
                                </div> */}
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faFigma}
                        style={{
                          background: "purple",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>Figma</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col text-center">
                    <h5>
                      <b>Others</b>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faGitAlt}
                        style={{
                          background: "#E94E31",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                        size="xs"
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>Git</b>
                      </p>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{
                          background: "#000000",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                        size="xs"
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>Github</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <FontAwesomeIcon
                        icon={faCpanel}
                        style={{
                          background: "#E55E26",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                        size="xs"
                      ></FontAwesomeIcon>
                      {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                      <p>
                        <b>cPanel</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="facts" className="facts services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Soft Skills</h2>
              <p>Here are some of my soft skills that I'm very good at.</p>
            </div>

            <div className="row">
              {/* <div className="col">
                    <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Good Team Work</p>
                    </div>
                    </div>
        
                    <div className="col">
                    <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Critical Thinking</p>
                    </div>
                    </div>
        
                    <div className="col">
                    <div className="count-box">
                        <i className="bi bi-headset"></i>
                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Problem Solving</p>
                    </div>
                    </div> */}

              {/* <div className="col">
                    <div className="count-box">
                        <i className="bi bi-award"></i>
                        <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Awards</p>
                    </div>
                    </div> */}

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch justify-content-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-teal">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        stroke-width="0"
                        fill="#f5f5f5"
                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                      ></path>
                    </svg>
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <h4>Good Team Work</h4>
                  {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch justify-content-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-blue">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        stroke-width="0"
                        fill="#f5f5f5"
                        d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                      ></path>
                    </svg>
                    <i className="bi bi-boxes"></i>
                  </div>
                  <h4>Critical Thinking</h4>
                  {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch justify-content-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        stroke-width="0"
                        fill="#f5f5f5"
                        d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                      ></path>
                    </svg>
                    <i className="bi bi-tools"></i>
                  </div>
                  <h4>Problem Solving</h4>
                  {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
