import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import './About.css'; 
import DentalClinicHero from '../../Layouts/img/DentalClinicHero.jpg';
const About = () => {
  return (
    <div className="">
      <div className="about-page">
        <ul className="slider">
          <li className="slider-item">
            <img src={DentalClinicHero} alt="Dental Clinic Hero" className="slider-image" />
            <div className="content-wrapper">
              <div className="container-tilte">
                <div className="slide-content">
                  <h2><span>Free Dental Care for Kids and Seniors for Eligible Families</span></h2>
                  <button className="btn btn-danger">Book Appointment Online</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      
      <div className="home-features container mt-̀5">
        <div className="slogan-section text-center">
          <h1><span>About Australian Dentists Clinic</span></h1>
        </div>
        <p>
          We are committed to offering quality dental care for the whole family. Whether you are in need of cosmetic dentistry, restorative work, or a <br />
          <a href="https://dentistsclinic.com.au/locations/melbourne-cbd/dentist-checkup-special.html">regular dental checkup</a>, you are in good hands with our friendly, skilled dental technicians and qualified dentists.
        </p>
        <br />
      </div>

      <div className="container">
      <div className="home-features">
        <div className="container-box">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 single-feature">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 icon-wrapper">
                      <FaPlusSquare />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9">
                      <h3>Comprehensive Care</h3>
                      <p>Our dentists provide complete dental care from Family Dentistry and Preventive Dental Care to more complex Cosmetic treatments.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 single-feature">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 icon-wrapper">
                      <FaPlusSquare />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9">
                      <h3>We Open 7 Days a Week</h3>
                      <p>We understand that our patients live a busy lifestyle. That is why we are open early and late weekdays, weekends and public holidays.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 single-feature">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 icon-wrapper">
                      <FaPlusSquare />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9">
                      <h3>We are Your Local Dentist</h3>
                      <p>We are the fastest growing dental clinic practice in Australia. There is a very good chance that a dental clinic is very close.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 single-feature">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 icon-wrapper">
                      <FaPlusSquare />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9">
                      <h3>Affordable Dental Care</h3>
                      <p>Without sacrificing quality we provide affordable dentistry. We always provide a written treatment plan with transparent fees.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
