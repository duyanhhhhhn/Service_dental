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
import Appointment from './components/FE_CLIENT/Page/Appointment/Appointment';

const App = () => {
    return (<>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/About' element={<About/>}/>
            <Route path='/Services' element={<Service />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Register' element={<Register/> } />
            <Route path='/Appointment' element={<Appointment/>}/>
        </Routes>
            <Footer />
    </>
    );
}

export default App;
