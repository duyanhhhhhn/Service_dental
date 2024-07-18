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
import axios from 'axios';
import Products from './components/FE_CLIENT/Page/Product/Products';

axios.defaults.baseURL ='http://127.0.0.1:8000/api'
const App = () => {
    return (<>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/About' element={<About/>}/>
            <Route path='/Services' element={<Service />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Products'element={<Products/>} />
        </Routes>
        <Footer />
    </>
    );
}


export default App;
