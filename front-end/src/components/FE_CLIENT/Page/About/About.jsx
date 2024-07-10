import React, { useEffect, useState } from "react";
import "./About.css";
// import Footer from "../../Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// icon
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

function About() {
  // effect srcoll
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    document.title = 'Nobel-AboutUs';
  }, []);
  const [items, setItems] = useState([]);
  const [founders, setFounders] = useState([]);
  useEffect(() => {
    const items = [
      {
        icon: "understanding.png",
        content: "Prioritized minimally invasive treatments and your natural aesthetics",
      },
      {
        icon: "info.png",
        content: "Use high-grade products imported from the US and Europe.",
      },
      {
        icon: "nobel.png",
        content: "Procedures following the standards of the Ministry of Health of Vietnam.",
      },
    ];
    setItems(items);
  }, []);
  useEffect(() => {
    const founders = [
      {
        avatar: "123.jpg",
        name: "DENTAL IMPLANT",
      },
      {
        avatar: "1234.jpg",
        name: "DENTAL VENEER",
      },
      {
        avatar: "12345.jpg",
        name: "ORTHODONTIC",
      },
      {
        avatar: "dentalimplant.jpg",
        name: "ORTHODONTIC",
      },
    ];
    setFounders(founders);
  }, []);
  return (
    <div className="container">
      <div className="overlay">
        {/* header content */}
        <header className="header-about">
          <div className="overlay"></div>
          <div className="header-content">
            <h1 className="header-title">About Us</h1>
          </div>
        </header>
        {/* title-bio */}
        <section className="text-light text-center mt-2 container">
          <div className="row m-auto">
            {items.map((item, index) => (
              <div className="col-lg-4 col-md-4 item-info" key={index} data-aos="fade-up">
                <img
                  src={require(`../../../../img/${item.icon}`).default}
                  alt="icon"
                  width={75}
                  className="mb-3"
                  data-aos='zoom-in'
                />
                <p className="mb-3">{item.content}</p>
                <Link to={item.link} className="btn btn-info mt-3">
                  Explore ➡️
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/*contact */}
        <section className="text-light text-center mt-2 container mt-4">
          <h3 className="font mt-5" data-aos="zoom-in">
            Services{" "}
          </h3>
          <div className="row m-auto mt-3">
            {founders.map((founder, index) => (
              <div className="col-lg-4 col-md-4 founder-item" key={index} data-aos="fade-up">
                <img
                  src={require(`../../../../img/${founder.avatar}`).default}
                  alt="icon"
                  width={250}
                  className="mb-3 avata-founder mt-5 rounded-circle"
                />
                <p className="font-name">{founder.name}</p>
                <i style={{ color: "gray" }}>{founder.content}</i>
              </div>
            ))}
          </div>
        </section>
        <hr style={{ color: "gray" }} className="mt-5" />
        <section className="text-light mt-2 container mt-5">
          <h3 className="font" data-aos="fade-right">
            Contact
          </h3>
          <div className="row m-auto mt-3">
            <div className="col-lg-5 col-md-5 list-contact">
              <ul>
                <li>
                  <Link to='https://goo.gl/maps/DKnAZJVpv6W6FsNe7'>
                    <MdLocationOn />
                  </Link>{" "}
                  <Link to='https://goo.gl/maps/DKnAZJVpv6W6FsNe7' target="_blank" className="des-contact">
                    : 35/6 D5, Ward 25, Binh Thanh District, Ho Chi Minh City
                  </Link>
                </li>
                <li>
                  <Link to='tel: 0123456789'>
                    {" "}
                    <BsFillTelephoneOutboundFill />
                  </Link>{" "}
                  <Link to='tel: 0123456789' className="des-contact"> : (+84) 123456789</Link>
                </li>
                <li>
                  <Link to="mailto:baconbao@gmail.com">
                    <MdAttachEmail />
                  </Link>{" "}
                  <Link to="123@gmail.com" className="des-contact"> : 123@gmail.com</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0602914767587!2d106.71159650988643!3d10.806694358591686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ed00409f09%3A0x11f7708a5c77d777!2zQXB0ZWNoIENvbXB1dGVyIEVkdWNhdGlvbiAtIEjhu4cgVGjhu5FuZyDEkMOgbyB04bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIHThur8gQXB0ZWNo!5e0!3m2!1svi!2s!4v1688450671581!5m2!1svi!2s"
                height={450}
                style={{
                  border: "0",
                  allowfullscreen: "",
                  loading: "lazy",
                  referrerpolicy: "no-referrer-when-downgrade",
                }}
                className="w-100"
              />
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default About;
