import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import PreLoader from "./Components/PreLoader/PreLoader";
import BrandingMainP from "./Pages/Service/Branding/BrandingMainP/BrandingMainP";
import BrandingSubP from "./Pages/Service/Branding/BrandingSubP/BrandingSubP";
import Blogs from "./Pages/Blogs/Blogs";
import Singleblogpage from "./Pages/Blogs/Singleblogpage/Singleblogpage";

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
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/branding" element={<BrandingMainP />}></Route>
            <Route path="/branding-positioning" element={<BrandingSubP/>}></Route>
            <Route path="/blogs" element={<Blogs/>}></Route>
            <Route path="/Singleblogpage" element={<Singleblogpage/>}></Route>

            

          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
