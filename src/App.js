import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import PreLoader from "./Components/PreLoader/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000); // Set the desired loading duration
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
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
