import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/FE_CLIENT/Layouts/Footer";
import Home from "./components/FE_CLIENT/Page/Home";
import Header from './components/FE_CLIENT/Layouts/Navbar';
import About from './components/FE_CLIENT/Page/About/About';
import Service from './components/FE_CLIENT/Page/Service';
import News from './components/FE_CLIENT/Page/News/News';
import axios from 'axios';
import Products from './components/FE_CLIENT/Page/Product/Products';
import Details from './components/FE_CLIENT/Page/News/Details';
import Appointment from './components/FE_CLIENT/Page/Appointment/Appointment';

import AdminNews from './components/FE_Admin/AD_News/AdminProducts';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';
axios.defaults.baseURL ='http://127.0.0.1:8000'
const App = () => {
    return (<>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Service />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/appointment' element={<Appointment /> } />
            <Route path='/news' element={<News />} />
            <Route path='/news/:id' element={<Details />} />
            <Route path='/products'element={<Products/>} />
            {/* <Route path="/" element={<Home />} />
            <Route path='/About' element={<About/>}/>
            <Route path='/Services' element={<Service />} />
            <Route path='/login' element={<Login />} />
            <Route path='/News' element={<News/> } />
            <Route path='/Products'element={<Products/>} /> */}







            <Route path='/admin/news' element={<AdminNews />} />
            
        </Routes>
        <Footer />
    </>
    );
}


export default App;
