import React, { Component } from 'react';

import Aos from 'aos';
import Typed from 'typed.js';

export default class Hero extends Component {

    componentDidMount(){
        setTimeout(()=> Aos.init(), 500)
        

        let typed = new Typed('#typed', {
            strings: ['Front-End Developer','UI/UX Designer'],
            typeSpeed : 50,
            backDelay : 1000,
            loop : true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '/',
        })
    }


  render() {
    return (
      <section id="hero" style={{ backgroundImage: 'url(/assets/img/kiw.jpg)' }} className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="150">
            <h1>Muhammad Chaerul Pasya</h1>
            <p>I'm <span className="typed" id="typed" data-typed-items=" a Developer, Front-End Engineering"></span> </p>
            <div className="social-links">
                {/* <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                </a> */}
                <a href="https://www.facebook.com/OneofDUStudents" className="facebook" target={'_blank'} rel={['noopener noreferrer']}>
                    <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/fikrifardana_" className="instagram" target={'_blank'}  rel={['noopener noreferrer']}>
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://github.com/FFiuca" className="google-plus" target={'_blank'}  rel={['noopener noreferrer']}>
                    <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/fikri-f-339546107/" className="linkedin" target={'_blank'}  rel={['noopener noreferrer']}>
                    <i className="bx bxl-linkedin"></i>
                </a>
            </div>
        </div>
      </section>
    )
  }
}
