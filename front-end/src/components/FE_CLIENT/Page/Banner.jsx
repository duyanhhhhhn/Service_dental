import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import banner from "../Layouts/img/banner.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        paddingTop: '36px',
        paddingBottom: '36px',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto'
      }}
    >
      <Container>
        <h1 className="display-1 text-dark font-weight-bold mb-4">
          Healthy Teeth, Bright Smile
        </h1>
        <p className="w-50 text-dark">
          A bright smile for a brighter soul.
          <br />
          Contact us if you have any dental issues.
        </p>
        <div className="mt-4">
          <Link to="/contact" style={{ marginRight: '5px' }}>
            <Button
              variant="primary"
              className="px-4 py-2 font-weight-medium rounded"
              style={{ backgroundColor: 'white', color: '#333' }}
            >
             Contact us
            </Button>
          </Link>
          <Link to="#">
            <Button
              variant="primary"
              className="px-4 py-2 font-weight-medium rounded"
              style={{ backgroundColor: 'white', color: '#333' }}
            >
              <i className="bi bi-telephone-fill"> +123456789</i>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
