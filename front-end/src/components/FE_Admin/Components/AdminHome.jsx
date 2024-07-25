import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { BsFillPersonFill,BsFillTrophyFill,BsChatSquareTextFill} from "react-icons/bs";
import CardItem from './Carditem'
import '../Components/AdminHome.scss'
import AdminNav from './AdminNav';
import axios from 'axios';
export default function AdminHome() {
  const navigate = useNavigate();
    useEffect(() => {
      document.title = 'Dental-Admin';
    }, []);
  const [products, setProducts] = useState();
  const [news, setNews] = useState();
  const [appointment, setAppointment] = useState();
    useEffect(() => {
        axios.get('/products').then(resp => setProducts(resp.data));
    }, []);
    useEffect(() => {
        axios.get('/news').then(resp => setNews(resp.data));
    }, []);
  useEffect(() => {
        axios.get('/appointment').then(resp => setAppointment(resp.data));
    }, []);
  const handleOnclickAppointment=()=> {
    navigate('/admin/appointment')
  }
  const handleOnclickProducts=()=> {
    navigate('/admin/products')
  }
  const handleOnclickNews=()=> {
    navigate('/admin/news')
  }
  return (
    <Container fluid className='wrapper'>
      <Row> 
        <Col lg={2} className='padding-0 d-xl-flex d-lg-none d-xs-none d-sm-none xs-none'>
          <AdminNav page={'Admin'} />
        </Col>
        <Col  className='bg-content d-xl-10 d-md-12 d-xs-12 '>
          <Row>
            <Container >
              <Card className='bg-white card-ad-home ' style={{ width: '100%' }}>
                <section className='header-ad-containt d-flex justify-content-between align-items-center' >
                  <section>
                  </section>
                  <span className='d-inline-block'>
                    <h1> ADMIN</h1>
                  </span>
                  <section className='text-center'>
                  </section>
                </section>
              </Card>
            </Container >
          </Row>
          <Row >
            <Card className=' bg-white card-ad-body mb-5'>
              <Row>
                <Col lg={4} md={4} className="mb-4 mt-5"  >
                  <section onClick={handleOnclickAppointment} className='mb-4 d-flex justify-content-center'>
                  <CardItem title={'Appointment'} Icon={BsFillPersonFill} content={appointment?appointment.length +' appointment':'0 appointment'} cardColor={'card-color1'} />
                  </section>
                </Col>
                <Col lg={4} md={4} className="mb-4 mt-5" >
                  <section onClick={handleOnclickProducts} className='mb-4 d-flex justify-content-center'>
                  <CardItem title={'Products'} Icon={BsFillTrophyFill} content={products?products.length +' products':' 0 products'} cardColor={'card-color3'} />
                  </section>
                </Col>
                <Col lg={4} md={4} className="mb-4 mt-5 " >
                <section onClick={handleOnclickNews} className='mb-4 d-flex justify-content-center'>
                  <CardItem title={'News'} Icon={BsChatSquareTextFill} content={news?news.length +' news':'0 news'} cardColor={'card-color4'} />
                </section>
                </Col>
              </Row>
            </Card>
          </Row>

        </Col>
      </Row>
    </Container>
  )
  }
