import { useEffect, useState } from "react";
import Navbar from "./Navbar-1";
import TopNavbar from "./Navbar-2";
import Home from "../pages/Home";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Get_Started from "../pages/Get-Started";
import GetFit from "../pages/Get-Fit";
import Contact from "../pages/Contact";

function App() {
  

  return (
    <div className="App">
      <TopNavbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/exercises-for-fitness" element={<Get_Started/>}></Route>
        <Route path="/exercise" element={<GetFit/>}></Route>
        <Route path="/create-plan" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;