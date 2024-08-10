import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import SearchCars from "./Pages/SearchCars";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
<BrowserRouter>
    <div>
   <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/book-car' element={<SearchCars />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
