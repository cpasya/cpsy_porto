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
                      {/* <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>21</span>
                      </li> */}
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
                  I'm a person who likes discovering something new and eager to
                  learn many new things to grow and expand my skill set,
                  interested in the topics of technology, web or app
                  development, and visual design. Specialize in front-end
                  development for a year and always keep up-to-date with the
                  latest design and technology trends to create engaging user
                  interfaces and user experiences.
                </p> */}
                <p className="mt-5">
                  As a Software Developer at Directorate of Airworthiness and
                  Aircraft Operations (DAAO), I specialize in front-end
                  development using React and Laravel, two of the most popular
                  and powerful frameworks for web and mobile applications. I am
                  passionate about creating engaging user interfaces and user
                  experiences that meet the needs and expectations of the
                  clients and the users.
                </p>
                <p className="mt-3">
                  In my previous role as a Frontend Developer at PT. BANGSAWAN
                  CYBERINDO, I contributed to the development of a responsive
                  landing page and eight apps for a marketplace application,
                  using HTML, CSS, JavaScript, and PHP. I also partnered with
                  the backend developer to create and integrate a RESTful API
                  for the admin panel, using Insomnia and Postman. I have
                  multiple certifications in React, Redux, and UI/UX design, and
                  I am always eager to learn new technologies and skills to grow
                  and expand my skill set.
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
                  <div className="col-6">
                    <div className="count-box mt-0">
                      {/* <p 
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
                      ></p> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        style={{
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                        }}
                      >
                        <path
                          fill="#03A9F4"
                          d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"
                        ></path>
                        <path
                          fill="#020F16"
                          d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"
                        ></path>
                        <path
                          fill="#020F16"
                          d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"
                        ></path>
                      </svg>
                      <p>
                        <b>Photoshop</b>
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
                        icon={faNodeJs}
                        style={{
                          background: "white",
                          borderRadius: "50px",
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "green",
                        }}
                        size="xs"
                      ></FontAwesomeIcon>
                      <p>
                        <b>Node Js</b>
                      </p>
                    </div>
                  </div>
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
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 64 64"
                        style={{
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <path
                          fill="#8d6c9f"
                          d="M35.774,47.286c-0.433,0-0.831-0.282-0.959-0.718l-0.564-1.919c-0.156-0.53,0.146-1.086,0.677-1.241 c0.531-0.158,1.087,0.148,1.241,0.677l0.564,1.919c0.156,0.53-0.146,1.086-0.677,1.241C35.963,47.273,35.867,47.286,35.774,47.286z"
                        ></path>
                        <path
                          fill="#8d6c9f"
                          d="M30.779,47.938c-0.032,0-0.064-0.001-0.097-0.005c-0.55-0.053-0.952-0.541-0.899-1.091l0.191-1.991 c0.053-0.551,0.55-0.965,1.091-0.899c0.55,0.053,0.952,0.541,0.899,1.091l-0.191,1.991C31.724,47.551,31.289,47.938,30.779,47.938z"
                        ></path>
                        <path
                          fill="#8d6c9f"
                          d="M25.928,46.158c-0.206,0-0.414-0.063-0.592-0.195c-0.445-0.327-0.54-0.953-0.212-1.397l1.187-1.61 c0.326-0.445,0.955-0.54,1.397-0.212c0.445,0.327,0.54,0.953,0.212,1.397l-1.187,1.61C26.538,46.018,26.234,46.158,25.928,46.158z"
                        ></path>
                        <path
                          fill="#8d6c9f"
                          d="M22.799,42.033c-0.397,0-0.772-0.237-0.929-0.628c-0.206-0.513,0.044-1.095,0.557-1.301l1.856-0.743 c0.513-0.206,1.094,0.045,1.3,0.557c0.205,0.513-0.044,1.095-0.557,1.301l-1.857,0.743C23.049,42.011,22.923,42.033,22.799,42.033z"
                        ></path>
                        <path
                          fill="#f9dd8f"
                          d="M31.807,57c-9.731,0-19.583-6.088-19.583-17.725c0-1.838,0.224-3.503,0.625-5.005	c-0.318,0.66-0.869,1.134-1.651,1.414c-0.317,0.114-0.646,0.172-0.977,0.172c-1.258,0-2.401-0.846-2.844-2.105	c-0.696-1.98-0.677-7.472,2.332-13.776c2.814-5.896,7.563-10.145,13.734-12.285C24.762,7.231,26.008,7,27.146,7	c1.258,0,2.407,0.28,3.417,0.834c1.91,1.049,3.178,2.93,3.875,5.75c0.846,3.415,0.709,7.55,0.641,8.822	c0.008-0.022,0.015-0.046,0.022-0.069c0.809-2.519,2.452-7.099,3.666-9.39c0.952-1.796,2.438-2.907,4.184-3.131	c0.218-0.028,0.439-0.043,0.662-0.043c1.809,0,3.59,0.95,5.293,2.823c1.737,1.871,10.049,11.459,7.662,21.58	c-0.317,1.342-1.532,2.278-2.955,2.278c-0.282,0-0.563-0.038-0.836-0.114c-0.672-0.189-1.227-0.617-1.608-1.178	c1.256,2.13,1.888,4.264,1.888,6.393C53.057,50.11,41.432,57,31.807,57z M34.632,24.897c-0.682,1.892-2.36,3.607-6.515,3.754	c-3.935,0.14-9.79,3.084-9.79,10.624c0,7.601,6.781,11.577,13.479,11.577c6.474,0,15.146-4.597,15.146-9.297	c0-3.018-3.305-6.969-9.069-10.845l-0.251-0.128l-0.055-0.038C35.553,29.136,34.558,27.212,34.632,24.897z M43.912,16.411	c-0.956,2.121-2.556,5.673-3.271,7.901c-0.202,0.63-0.068,0.801,0.591,1.259c4.571,3.065,7.831,6.173,9.756,9.29	c-0.377-0.71-0.503-1.578-0.287-2.437c1.412-5.624-4.066-13.223-6.296-15.676c-0.201-0.222-0.358-0.344-0.46-0.405	C43.935,16.362,43.924,16.385,43.912,16.411z M27.14,13.143c-0.443,0-1.034,0.124-1.709,0.358	c-11.964,4.152-12.701,15.944-12.35,18.094c0.107,0.656,0.122,1.241,0.045,1.752c2.496-7.55,9.652-10.657,14.777-10.839	c1.142-0.04,1.383-0.221,1.393-0.229c0.096-0.935-0.122-4.559-0.778-7.209c-0.369-1.496-0.792-1.794-0.873-1.838	C27.582,13.198,27.437,13.143,27.14,13.143z"
                        ></path>
                        <path
                          fill="#8d6c9f"
                          d="M27.146,8c1.091,0,2.072,0.237,2.936,0.711c1.653,0.907,2.76,2.58,3.386,5.114	c0.79,3.194,0.694,7.072,0.611,8.58c-0.112,2.047-0.616,5.058-5.997,5.248c-4.323,0.153-10.755,3.374-10.755,11.623	c0,8.257,7.284,12.577,14.479,12.577c7.051,0,16.147-4.993,16.147-10.297c0-3.341-3.331-7.528-9.561-11.707l-0.244-0.126	c-3.047-2.118-2.731-5.098-2.095-7.08c0.85-2.651,2.461-7.082,3.598-9.226c0.794-1.501,2.011-2.427,3.427-2.607	c0.178-0.024,0.356-0.035,0.535-0.035c1.514,0,3.049,0.842,4.553,2.496c0.412,0.454,9.883,10.274,7.429,20.677	c-0.218,0.923-1.071,1.509-1.981,1.509c-0.189,0-0.379-0.025-0.568-0.078c-1.091-0.309-1.655-1.598-1.376-2.709	c1.538-6.128-4.15-13.979-6.525-16.593c-0.456-0.502-0.9-0.785-1.287-0.785c-0.342,0-0.638,0.221-0.858,0.708	c-1.008,2.238-2.584,5.741-3.311,8.007c-0.42,1.308,0.246,1.881,0.972,2.386c7.615,5.107,11.396,10.267,11.396,15.163	C52.057,49.557,40.979,56,31.806,56c-9.234,0-18.582-5.744-18.582-16.725c0-11.187,8.799-15.559,14.713-15.768	c1.847-0.065,2.231-0.481,2.312-1.07c0.149-1.08-0.073-4.821-0.762-7.607c-0.328-1.326-0.786-2.158-1.363-2.475	c-0.277-0.152-0.618-0.212-0.984-0.212c-0.669,0-1.425,0.201-2.037,0.414c-13.021,4.518-13.299,17.424-13.009,19.199	c0.28,1.713-0.166,2.604-1.233,2.987c-0.214,0.077-0.43,0.113-0.64,0.113c-0.838,0-1.597-0.575-1.9-1.438	c-0.622-1.769-0.57-7.018,2.291-13.013c2.696-5.649,7.246-9.72,13.159-11.771C24.99,8.211,26.117,8,27.146,8 M27.146,6	c-1.251,0-2.607,0.25-4.031,0.744c-6.429,2.231-11.377,6.657-14.309,12.8c-3.161,6.624-3.151,12.323-2.373,14.538	c0.583,1.66,2.105,2.775,3.787,2.775c0.39,0,0.777-0.059,1.152-0.176c-0.098,0.826-0.149,1.691-0.149,2.595	C11.224,51.568,21.578,58,31.806,58c10.289,0,22.25-7.183,22.25-16.445c0-1.373-0.24-2.743-0.718-4.109	c0.092,0.006,0.183,0.009,0.275,0.009c1.889,0,3.504-1.254,3.927-3.049c2.442-10.349-5.395-19.792-7.855-22.439l-0.039-0.043	c-1.901-2.091-3.93-3.151-6.033-3.151c-0.265,0-0.534,0.018-0.797,0.052c-2.07,0.264-3.825,1.562-4.932,3.655	c-0.585,1.104-1.264,2.714-1.904,4.377c-0.109-1.162-0.288-2.369-0.571-3.513c-0.768-3.106-2.195-5.195-4.365-6.386	C29.885,6.322,28.574,6,27.146,6L27.146,6z M14.178,28.933c0.463-3.913,2.56-11.357,11.58-14.487c0.547-0.19,1.044-0.3,1.368-0.303	c0.092,0.158,0.255,0.503,0.419,1.167c0.533,2.153,0.745,4.841,0.75,6.173c-0.118,0.01-0.26,0.019-0.429,0.025	C23.461,21.664,17.639,23.855,14.178,28.933L14.178,28.933z M41.598,24.603c0.571-1.773,1.731-4.442,2.653-6.505	c2.275,2.738,6.353,8.83,5.592,13.535c-1.991-2.326-4.683-4.63-8.069-6.901C41.7,24.68,41.642,24.637,41.598,24.603L41.598,24.603z M31.806,49.852c-6.201,0-12.479-3.633-12.479-10.577c0-7.366,5.773-9.516,8.825-9.624c2.593-0.092,4.557-0.779,5.884-2.054	c0.513,1.475,1.51,2.753,2.971,3.769l0.108,0.075l0.117,0.06l0.14,0.072c5.375,3.624,8.581,7.351,8.581,9.982	C45.954,45.277,38.153,49.852,31.806,49.852L31.806,49.852z"
                        ></path>
                      </svg>
                      <p>
                        <b>Navicat</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="count-box mt-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        style={{
                          height: "48px",
                          width: "48px",
                          fontSize: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#fff"
                          d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
                        ></path>
                        <path
                          fill="#0277bd"
                          d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
                        ></path>
                        <path
                          fill="#0277bd"
                          d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
                        ></path>
                        <path
                          fill="#0277bd"
                          d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
                        ></path>
                      </svg>
                      <p>
                        <b>PgAdmin</b>
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
