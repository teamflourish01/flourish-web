import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import PreLoader from "./Components/PreLoader/PreLoader";
import wp from "./assets/whatsapp.svg";
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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 7500); // Set the desired loading duration
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setLoading(false); // Immediately hide PreLoader on smaller screens
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 7500); // Set timeout only for larger screens

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="app-container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/service/:slug" element={<BrandingMainP />}></Route>
            <Route path="/subservice/:slug" element={<BrandingSubP />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route
              path="/Singleblogpage/:slug"
              element={<Singleblogpage />}
            ></Route>
          </Routes>
          {/* </div> */}
          <Footer />
          <a
            href="https://wa.me/9499619901?text=Hello%20Flourish%20Creations%2C%20I%20want%20to%20know%20more%20about%20your%20services%20and%20want%20to%20know%20how%20your%20services%20can%20be%20beneficial%20for%20me."
            class="whatsapp-float"
            target="_blank"
          >
            <img src={wp} alt="WhatsApp" />
          </a>
        </div>
      )}
    </>
  );
}

export default App;
