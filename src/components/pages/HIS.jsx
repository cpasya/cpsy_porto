import React, { Component } from "react";

export default class HIS extends Component {
  componentDidMount() {
    setTimeout(() => {
      console.log(document.querySelector("#preloader").remove());
    }, 500);

    // document.getElementById('preloader').remove()
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
                      <img src="\assets\img\portfolio\sr.jpeg" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img
                        src="\assets\img\portfolio\Web capture_7-10-2022_141347_sr.jpeg"
                        alt=""
                      />
                    </div>

                    <div className="swiper-slide">
                      <img
                        src="\assets\img\portfolio\Web capture_7-10-2022_141451_sr.jpeg"
                        alt=""
                      />
                    </div>

                    <div className="swiper-slide">
                      <img
                        src="\assets\img\portfolio\Web capture_7-10-2022_141515_sr.jpeg"
                        alt=""
                      />
                    </div>

                    <div className="swiper-slide">
                      <img
                        src="\assets\img\portfolio\Web capture_7-10-2022_141544_sr.jpeg"
                        alt=""
                      />
                    </div>

                    <div className="swiper-slide">
                      <img src="\assets\img\portfolio\admin-sr.jpeg" alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3> Hospitalty Informastion System </h3>
                  <ul>
                    {/* <li><strong>Category</strong>: Web design</li>
                    <li><strong>Client</strong>: ASU Company</li> */}
                    <li>
                      <strong>Project Year</strong>: 2020
                    </li>
                    {/* <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li> */}
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>About Portfolio</h2>
                  <p class="text-justify" style={{ textAlign: "justify" }}>
                    It is an application for the owner to manage and monitor
                    reserved rooms. Such as Hospitalty Information System
                    generally, this apps also have booking management, guest
                    relationship management, an avaibilty and reservation system
                    and financial statements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
