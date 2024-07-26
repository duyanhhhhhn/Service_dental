import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/FE_CLIENT/Layouts/Footer";
import Home from "./components/FE_CLIENT/Page/Home";
import Header from './components/FE_CLIENT/Layouts/Navbar';
import About from './components/FE_CLIENT/Page/About/About';
import Service from './components/FE_CLIENT/Page/Service';
import News from './components/FE_CLIENT/Page/News/News';
import axios from 'axios';
import Products from './components/FE_CLIENT/Page/Product/Products';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';              
import 'primeicons/primeicons.css';                              
import 'primeflex/primeflex.css';   
import Appointment from './components/FE_CLIENT/Page/Appointment/Appointment';
import AdminProducts from './components/FE_Admin/AD_Products/AdminProducts';
import AdminNews from './components/FE_Admin/AD_News/AdminNews';
import PrivateRoute from './PrivateRoute';
import AdminHome from './components/FE_Admin/Components/AdminHome';
import Details from './components/FE_CLIENT/Page/News/Details';
import Login from './components/FE_CLIENT/Page/Login/Login';
import AdminAppointment from './components/FE_Admin/AD_Appointment/AdminAppointments';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

const App = () => {
  const location = useLocation();

  const isClientRoute = ["/", "/About", "/Services", "/News", "/Products", "/contact"].includes(location.pathname) || location.pathname.match(/^\/News\/[0-9a-zA-Z]+$/);

  return (
    <>
      {isClientRoute && <Header />}
      
      <Routes>
        {/* Client */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/News" element={<News />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Appointment />} />
        <Route path='/News/:id' element={<Details />} />
        {/* Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<PrivateRoute />}>
          <Route index element={<AdminHome />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="appointment" element={<AdminAppointment />} />
        </Route>
      </Routes>
      
      {isClientRoute && <Footer />}
    </>
  );
}

export default App;


