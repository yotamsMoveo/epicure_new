import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterPage from "./components/Footer/Foter";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/layout";
import Restaurants from "./pages/RestaurantsPage/RestaurantsPage";
import Restaurant from "./pages/RestaurantPage/RestaurantPage";
import { PopupType } from "./components/PopUp/PopUp";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopUp] = useState("");

  const handlePopUpOpen = (selectedPopUp: string) => {
    setIsOpen(!isOpen);
    if (isOpen || selectedPopUp.localeCompare(popup) != 0) {
      setPopUp(selectedPopUp);
    } else setPopUp("");
  };

  return (
    <div className="app">
      <Navbar onClickAction={handlePopUpOpen} isOpen={isOpen} popup={popup} />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="restaurants/:id" element={<Restaurant />} />
          </Route>
        </Routes>
      </Router>
      <FooterPage />
    </div>
  );
}

export default App;
