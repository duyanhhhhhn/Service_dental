import React from "react";
import Banner from "./Banner";
import dentalImg from "../Layouts/img/dentalImg.jpg";
import Services from "./Services";
import News from "./NewsandEvent";
import '../Page/About/About.css';
import { BsFillCheckCircleFill } from "react-icons/bs";
import '../Page/Home.css';

const Home = () => {
  return (
    <>
      <Banner />
      <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                                <div className='section-title'>
                                            <span> About Dental Clinic</span>
                                            <h5>Dental Clinic - A prestigious dental system in Vietnam with over 30 clinics across 6 provinces nationwide.</h5>
                                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</p>
                                        </div>

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Well-trained staff
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    We provide quality treatment
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Best prices
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={dentalImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

      <Services />
      <News />
      <div style={{ paddingBottom: '50px' }}></div>
    </>
  );
};

export default Home;
