
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/FE_CLIENT/Layouts/Footer";
import Header from "./components/FE_CLIENT/Layouts/Navbar";
import Banner from './components/FE_CLIENT/Page/Banner';
import Home from "./components/FE_CLIENT/Page/Home";
import About from "./components/FE_CLIENT/Page/About/About";
const App = () => {
    return (
        <>
    {/* <Header />
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    <Footer/> */}
    <About />
        </>
       
    );
}

export default App;