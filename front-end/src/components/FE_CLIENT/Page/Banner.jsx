import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import banner from "../Layouts/img/banner.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
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
            width:'auto'
      }}
    >
      <Container>
        <h1 className="display-1 text-dark font-weight-bold mb-4">
         Răng khoẻ, cười tươi 
        </h1>
        <p className="w-50 text-dark">
       Nụ cười tươi sáng, tâm hồn càng tươi trẻ.
          <br />
          Hãy liên hệ với chúng tôi nếu bạn thấy có vấn đề về răng miệng
        </p>
        <div className="mt-4">
          <Link to="#" style={{marginRight:'5px'}}>
            <Button
              variant="primary"
              className="px-4 py-2 font-weight-medium rounded"
              style={{backgroundColor:'white',color:'#333'}}
            >
     <i class="bi bi-calendar-check"> Đặt lịch</i>
            </Button>
          </Link>
          <Link to="#">
            <Button
              variant="primary"
              className="px-4 py-2 font-weight-medium rounded"
              style={{backgroundColor:'white',color:'#333'}}
            >
           <i class="bi bi-telephone-fill"> +123456789</i>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
