import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import './About.css'; 
import DentalClinicHero from '../../Layouts/img/DentalClinicHero.jpg';
import { MdLocationOn, MdAttachEmail } from 'react-icons/md';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';

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

      <section className="bg-light py-3 py-md-5">
        <div className="container"> 
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">Get in touch</h2>
                  <p className="lead fs-4 text-secondary mb-5">
                    We're always on the lookout to work with new clients. If you're interested in working with us, please get in touch in one of the following ways.
                  </p>
                  <div className="d-flex mb-5">
                    <div className="me-4 text-primary">
                      <MdLocationOn size={32} />
                    </div>
                    <div>
                      <h4 className="mb-3">Address</h4>
                      <address className="mb-0 text-secondary">
                        8014 Edith Blvd NE, Albuquerque, New York, United States
                      </address>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-12 col-sm-6">
                      <div className="d-flex mb-5 mb-sm-0">
                        <div className="me-4 text-primary">
                          <BsFillTelephoneOutboundFill size={32} />
                        </div>
                        <div>
                          <h4 className="mb-3">Phone</h4>
                          <p className="mb-0">
                            <a className="link-secondary text-decoration-none" href="tel:+15057922430">
                              (505) 792-2430
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="d-flex mb-0">
                        <div className="me-4 text-primary">
                          <MdAttachEmail size={32} />
                        </div>
                        <div>
                          <h4 className="mb-3">E-Mail</h4>
                          <p className="mb-0">
                            <a className="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">
                              demo@yourdomain.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <MdAttachEmail size={32} />
                    </div>
                    <div>
                      <h4 className="mb-3">Opening Hours</h4>
                      <div className="d-flex mb-1">
                        <p className="text-secondary fw-bold mb-0 me-5">Mon - Fri</p>
                        <p className="text-secondary mb-0">9am - 5pm</p>
                      </div>
                      <div className="d-flex">
                        <p className="text-secondary fw-bold mb-0 me-5">Sat - Sun</p>
                        <p className="text-secondary mb-0">9am - 2pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form action="#!">
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12">
                      <label htmlFor="fullname" className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" id="fullname" name="fullname" required />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <MdAttachEmail />
                        </span>
                        <input type="email" className="form-control" id="email" name="email" required />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <BsFillTelephoneOutboundFill />
                        </span>
                        <input type="tel" className="form-control" id="phone" name="phone" />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">
                      Diagnose <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" id="subject" name="subject" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Description <span className="text-danger">*</span>
                      </label>
                      <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
