import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterPage from "./components/Footer/Foter";
import HomePage from "./pages/HomePage/HomePage";
import Restaurants from "./pages/RestaurantsPage/RestaurantsPage";
import Restaurant from "./pages/RestaurantPage/RestaurantPage";
import AOS from "aos";
import "aos/dist/aos.css";
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

  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    // once: false, // whether animation should happen only once - while scrolling down
    // mirror: false, // whether elements should animate out while scrolling past them
    // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div className="app">
      <Router>
        <Navbar
          onClickAction={handlePopUpOpen}
          isOpen={isOpen}
          popup={popup}
          navigate={goToRestaurantsPage}
        />
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
