import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import bannerOne from '../../img/banner_1.png'
import bannerTwo from '../../img/banner_2.png'
import pattern from '../../img/pattern.png'
import priorityImg from '../../img/priority.png'


const About = () => {
    return (
      <>
      <div className='about-section' data-aos="fade-up" data-aos-duration="2000">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="about-banner-text">
                    <h2>About Us</h2>
                    <p>We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss.</p>
                    <div className="theme-btn">
                      <Link to='/Services'>Services</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-banner-img text-center">
                    <img src={bannerOne} alt="about banner" />
                    <img src={bannerTwo} alt="about banner two" />
                    <img className='pattern' src={pattern} alt="pattern" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='priority-section' data-aos="fade-up" data-aos-duration="2000">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="priority-img">
                <img src={priorityImg} alt="Emergency" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="priority-text">
                <div className="section-title">
                  <h7>OUR PRIORITY</h7>
                  <h3>Our clients are our priority</h3>
                  <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
                <div className="theme-btn">
                  <Link to='/contact'>Book an appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default About;