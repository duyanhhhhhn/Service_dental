import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/FE_CLIENT/Layouts/Footer";
import Home from "./components/FE_CLIENT/Page/Home";
import Header from './components/FE_CLIENT/Layouts/Navbar';
import About from './components/FE_CLIENT/Page/About/About';
import Service from './components/FE_CLIENT/Page/Service';
import Login from './components/FE_CLIENT/Page/Login/Login';
import Register from './components/FE_CLIENT/Page/Register/Register';
import News from './components/FE_CLIENT/Page/News/News';
import axios from 'axios';
import Products from './components/FE_CLIENT/Page/Product/Products';
import Appointment from './components/FE_CLIENT/Page/Appointment/Appointment';


axios.defaults.baseURL ='http://127.0.0.1:8000/api'
const App = () => {
    return (<>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/About' element={<About/>}/>
            <Route path='/Services' element={<Service />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Register' element={<Register/> } />
            <Route path='/News' element={<News/> } />
            <Route path='/Products'element={<Products/>} />
            <Route path='/Appointment'element={<Appointment/>} />
        </Routes>
        <Footer />
    </>
    );
}


export default App;
