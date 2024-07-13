
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/FE_CLIENT/Layouts/Footer";
import Header from "./components/FE_CLIENT/Layouts/Navbar";
import Home from "./components/FE_CLIENT/Page/Home";
const App = () => {
    return (
        <>
    <Header />
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    <Footer/>
        </>
       
    );
}

export default App;