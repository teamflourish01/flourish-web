import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import PreLoader from "./Components/PreLoader/PreLoader";

import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Work from "./Pages/Work/Work";

import BrandingMainP from "./Pages/Service/Branding/BrandingMainP/BrandingMainP";
import BrandingSubP from "./Pages/Service/Branding/BrandingSubP/BrandingSubP";

import Blogs from "./Pages/Blogs/Blogs";
import Singleblogpage from "./Pages/Blogs/Singleblogpage/Singleblogpage";

import Contact from "./Components/Contact/Contact";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Nav from "./Components/Nav/Nav";
import TabNav from "./Components/TabNav/TabNav";
import MobNav from "./Components/MobNav/MobNav";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Set the desired loading duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="app-container">
          {/* <Routes>
          <Route path="/tabnav" element={<TabNav />}></Route>
          </Routes> */}
          <Nav />
          {/* <Navbar/> */}
          {/* <div className="div"> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/tabnav" element={<TabNav />}></Route> */}
            {/* <Route path="/mobnav" element={<MobNav />}></Route> */}

            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/work" element={<Work />}></Route>

            <Route path="/contact" element={<ContactUs />}></Route>
            {/* <Route path="/tabnav" element={<TabNav />}></Route> */}

            <Route path="/service/:slug" element={<BrandingMainP/>}></Route>

            <Route
              path="/subservice/brand-positioning"
              element={<BrandingSubP />}
            ></Route>
            

            {/* <Route path="/branding-positioning" element={<BrandingSubP/>}></Route> */}
            <Route path="/blogs" element={<Blogs/>}></Route>
            <Route path="/Singleblogpage" element={<Singleblogpage/>}></Route>

          </Routes>
          {/* </div> */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
