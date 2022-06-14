import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterPage from './components/Footer/FoterComp';
import HomePage from './pages/HomePage/HomePageComp';
import Layout from './pages/layout';
import Orders from './pages/Orders/OrdersComp';
import Restaurants from './pages/Resraurans/RestaurantsComp';

function App() {
  const home_page_data = useSelector((state:any) => state.homePageData);
  const chef_of_the_week = useSelector((state:any) => state.chefData);
  const restauran_page_data = useSelector((state:any) => state.restaurentsPageData);
  const dishes_page_data = useSelector((state:any) => state.dishesPageData);

  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopUp] = useState("");

  const handlePopUpOpen=(selectedPopUp: string)=> {
    setIsOpen(!isOpen);
    if (isOpen || selectedPopUp.localeCompare(popup) != 0) {
      setPopUp(selectedPopUp);
    } else setPopUp("");
  }

  return (
    <div className='app'>
      <Navbar onClick={handlePopUpOpen} isOpen={isOpen} popup={popup} />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="orders" element={<Orders />} />
            <Route path="restaurants" element={<Restaurants />} />
          </Route>
        </Routes>
      </Router>
      <FooterPage />
    </div>
  );
}

export default App;
