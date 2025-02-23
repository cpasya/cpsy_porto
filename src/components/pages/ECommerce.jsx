import React, { Component } from "react";

import { Button } from "react-bootstrap";

class ECommerce extends Component {
  componentDidMount() {
    setTimeout(() => document.getElementById("preloader").remove(), 500);
  }

  render() {
    return (
      <main id="main">
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src="\assets\img\landing-page-keywae.jpg" alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3> Marketplace app </h3>
                  <ul>
                    {/* <li><strong>Category</strong>: Web design</li>
                        <li><strong>Client</strong>: ASU Company</li> */}
                    <li>
                      <strong>Project Year</strong>: 2022
                    </li>
                    {/* <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li> */}
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>About Portfolio</h2>
                  <p class="text-justify" style={{ textAlign: "justify" }}>
                    'Keywae' is a business entity that aims to create business
                    and employment opportunities which in its broad concept
                    involves empowering existing elements in society within a
                    business corridor for achieving economic prosperity based on
                    mutual cooperation, by using roles - contributions in the
                    form of digital technology.
                  </p>
                  <br />
                  <Button variant="primary">
                    {/* <a
                          href="https://drive.google.com/drive/folders/1Er-jIp6qti5Nah6GvJPbwZ_bGNOTK5U8?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", textDecoration: "none" }}
                        > */}
                    <a
                      href="https://keywae.com/"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Go to Website
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default ECommerce;
