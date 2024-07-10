
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/FE_CLIENT/Layouts/Footer";
import Header from "./components/FE_CLIENT/Layouts/Navbar";
import Banner from './components/FE_CLIENT/Page/Banner';
import Home from "./components/FE_CLIENT/Page/Home";
import Service from "./components/FE_CLIENT/Page/Service";
import About from "./components/FE_CLIENT/Page/About/About";
const App = () => {
    return (
        <>
    {/* <Header />
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    
            </Routes>
        </BrowserRouter>
    <Footer/> */}
    <About />
        </>
       
    );
}

export default App;