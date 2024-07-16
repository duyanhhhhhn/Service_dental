import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from "./components/FE_CLIENT/Layouts/Footer";
// import Banner from './components/FE_CLIENT/Page/Banner';
// import Home from "./components/FE_CLIENT/Page/Home";
import About from "./components/FE_CLIENT/Page/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/FE_CLIENT/Page/Login/Login";
import Register from "./components/FE_CLIENT/Page/Register/Register";

const App = () => {
    return (
        <>
        {/* <Header />
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Home />}>
                        <Route path="/About" element={<About />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        <Footer/> */}
        <Register />
            </>
    );
}

export default App;
