
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/FE_CLIENT/Layouts/Footer";
import Header from "./components/FE_CLIENT/Layouts/Navbar";
import Banner from './components/FE_CLIENT/Page/Banner';
import Home from "./components/FE_CLIENT/Page/Home";
import Service from "./components/FE_CLIENT/Page/Service";
const App = () => {
    return (
        <>
    <Header />
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    
            </Routes>
        </BrowserRouter>
    <Footer/>
        </>
       
    );
}

export default App;