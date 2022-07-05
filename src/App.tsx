import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterPage from "./components/Footer/Foter";
import HomePage from "./pages/HomePage/HomePage";
import Restaurants from "./pages/RestaurantsPage/RestaurantsPage";
import Restaurant from "./pages/RestaurantPage/RestaurantPage";
// import { useNavigate } from "react-router-dom";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopUp] = useState("");
  // let navigate = useNavigate();
  const goToRestaurantsPage = () => {
    //navigate("/restaurants");
  };
  const handlePopUpOpen = (selectedPopUp: string) => {
    setIsOpen(!isOpen);
    if (isOpen || selectedPopUp.localeCompare(popup) != 0) {
      setPopUp(selectedPopUp);
    } else setPopUp("");
  };

  return (
    <div className="app">
      <Navbar onClickAction={handlePopUpOpen} isOpen={isOpen} popup={popup} navigate={goToRestaurantsPage}/>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="restaurants/:id" element={<Restaurant />} />
        </Routes>
      </Router>
      <FooterPage />
    </div>
  );
}

export default App;
