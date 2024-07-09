import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../Layouts/Footer.css'
const Footer = () => {
  return (
    <div style={{backgroundColor:"#2E6368"}} className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col lg={3}>
            <h1 className="text-2xl font-Poppins">Hệ thống nha khoa</h1>
            <p> 31 Nguyễn Đình Chiểu, P.Đa Kao, Q.1</p>
            <p>101 Sương Nguyệt Ánh, P.Bến Thành, Q.1</p>
            <p>345 Lê Văn Sỹ, P.13, Q.3</p>
            <p>348-350 Nguyễn Trãi, P.8, Q.5</p>
            <p>396 Đường 3 Tháng 2, P.12, Q.10</p>
          </Col>
           <Col lg={3}>
            <p>Trả góp 0% - Thanh toán linh hoạt</p>
            <p>Hợp tác chiến lược</p>
            <p>Bảo hiểm liên kết</p>
            <p>Hệ thống phòng khám</p>
            <p>Tuyển dụng</p>
          </Col>
          <Col lg={3}>
            <p>Nhà máy răng sứ</p>
            <p>Tiêu chuẩn chất lượng</p>
            <p>Niềng răng thẩm mỹ</p>
            <p>Trồng răng Implant</p>
            <p>Răng sứ thẩm mỹ</p>
          </Col>
          <Col lg={3}>
            <h1 className="text-2xl font-Poppins">Kết nối với chúng tôi</h1>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Nhập email của bạn"
                className="border-primary border px-4 py-3 rounded-l-md focus:outline-none"
              />
              <Button
                variant="primary"
                className="border-primary border border-l-0 rounded-r-md px-4 py-3 bg-primary text-white hover:bg-transparent hover:text-primary transition"
              >
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
