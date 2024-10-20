import React, { Component } from "react";
import "./css/Diary.css";

import { Button } from "react-bootstrap";

const Diary = () => {
  return (
    <section className="body-diary">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8">
            {/* <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src="\assets\img\landing-page-keywae.jpg" alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div> */}
            <div className="imgLoader"></div>

            <div className="container-1">
              <h1 className="title">
                {/* My Mini Album
                <br /> */}
                <b>
                  "Your journey has{" "}
                  <span className="text-bg-warning">molded</span> you for the
                  greater <span style={{ color: "darkorange" }}>good</span>."
                </b>
              </h1>
              <br />
              {/* <div className="credit">
                    * Images loaded randomly from Picsum.photos
                  </div> */}

              <div className="book">
                <div className="gap"></div>
                <div className="pages">
                  <div className="page"></div>
                  <div className="page"></div>
                  <div className="page"></div>
                  <div className="page"></div>
                  <div className="page"></div>
                  <div className="page"></div>
                </div>
                <div className="flips">
                  <div className="flip flip1">
                    <div className="flip flip2">
                      <div className="flip flip3">
                        <div className="flip flip4">
                          <div className="flip flip5">
                            <div className="flip flip6">
                              <div className="flip flip7"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="" style={{ fontSize: "24px", fontWeight: "bold" }}>
              I believe that life is a journey, often difficult and sometimes
              incredibly cruel, but we are well equipped for it if only we tap
              into our talents and gifts and allow them to blossom.
            </div>
            <br />
            <div className="" style={{ fontSize: "24px", fontWeight: "bold" }}>
              The Road Of Life Twists And Turns And No Two Directions Are Ever
              The Same. Yet Our Lessons Come From The Journey, Not The
              Destination.
            </div>
            <br />
            <div className="" style={{ fontSize: "24px", fontWeight: "bold" }}>
              You don’t have to understand my journey. You just need to{" "}
              <b style={{ color: "red" }}>respect</b> it.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diary;

// class Diary extends Component {
//   render() {
//     return (
//       <section className="body-diary">
//         <div className="container">
//           <div className="row gy-4">
//             <div className="col-lg-8">
//               {/* <div className="portfolio-details-slider swiper">
//                   <div className="swiper-wrapper align-items-center">
//                     <div className="swiper-slide">
//                       <img src="\assets\img\landing-page-keywae.jpg" alt="" />
//                     </div>
//                   </div>
//                   <div className="swiper-pagination"></div>
//                 </div> */}
//               <div className="imgLoader"></div>

//               <div className="container-1">
//                 <h1 className="title">
//                   My Private Diary
//                   <br />
//                   a.k.a Journey
//                 </h1>

//                 {/* <div className="credit">
//                     * Images loaded randomly from Picsum.photos
//                   </div> */}

//                 <div className="book">
//                   <div className="gap"></div>
//                   <div className="pages">
//                     <div className="page"></div>
//                     <div className="page"></div>
//                     <div className="page"></div>
//                     <div className="page"></div>
//                     <div className="page"></div>
//                     <div className="page"></div>
//                   </div>
//                   <div className="flips">
//                     <div className="flip flip1">
//                       <div className="flip flip2">
//                         <div className="flip flip3">
//                           <div className="flip flip4">
//                             <div className="flip flip5">
//                               <div className="flip flip6">
//                                 <div className="flip flip7"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//                 ea corrupti ipsa maxime autem laboriosam, saepe eius aut?
//                 Aliquid quis consectetur fuga numquam repellendus facere,
//                 deserunt doloremque neque obcaecati magnam?
//               </div>
//               <div className="">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//                 ea corrupti ipsa maxime autem laboriosam, saepe eius aut?
//                 Aliquid quis consectetur fuga numquam repellendus facere,
//                 deserunt doloremque neque obcaecati magnam?
//               </div>
//               <div className="">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//                 ea corrupti ipsa maxime autem laboriosam, saepe eius aut?
//                 Aliquid quis consectetur fuga numquam repellendus facere,
//                 deserunt doloremque neque obcaecati magnam?
//               </div>
//               <div className="">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//                 ea corrupti ipsa maxime autem laboriosam, saepe eius aut?
//                 Aliquid quis consectetur fuga numquam repellendus facere,
//                 deserunt doloremque neque obcaecati magnam?
//               </div>
//               <div className="">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//                 ea corrupti ipsa maxime autem laboriosam, saepe eius aut?
//                 Aliquid quis consectetur fuga numquam repellendus facere,
//                 deserunt doloremque neque obcaecati magnam?
//               </div>
//               <div className="">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//                 ea corrupti ipsa maxime autem laboriosam, saepe eius aut?
//                 Aliquid quis consectetur fuga numquam repellendus facere,
//                 deserunt doloremque neque obcaecati magnam?
//               </div>
//               <div className="">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//                 ea corrupti ipsa maxime autem laboriosam, saepe eius aut?
//                 Aliquid quis consectetur fuga numquam repellendus facere,
//                 deserunt doloremque neque obcaecati magnam?
//               </div>
//               <div className="">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//                 ea corrupti ipsa maxime autem laboriosam, saepe eius aut?
//                 Aliquid quis consectetur fuga numquam repellendus facere,
//                 deserunt doloremque neque obcaecati magnam?
//               </div>
//               <div className="">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//                 ea corrupti ipsa maxime autem laboriosam, saepe eius aut?
//                 Aliquid quis consectetur fuga numquam repellendus facere,
//                 deserunt doloremque neque obcaecati magnam?
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Diary;
