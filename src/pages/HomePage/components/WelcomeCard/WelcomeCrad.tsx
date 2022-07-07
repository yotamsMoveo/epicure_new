import "./welcomeCard.scss";
import searchLogo from "../../../../assets/images/search.png";
import { useState } from "react";
import { getDataBySearchItem } from "./WelcomeCardSlice";
import SearchInput from "../../../../components/SearchInput/SearchInput";

const WelcomeCardComp = () => {
  const [searchByItem, setSearchByItem] = useState("");

  const handleChanges = (event: any) => {
    const value = event.target.value;
    setSearchByItem(value);
  };

  /////////////////component
  return (
    <div className="welcome-comp-body">
      <div className="card">
        <div className="contant-wrapper">
          <div className="contant" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="title">
              Epicure works with the top chef restaurants in Tel Aviv
            </h1>
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCardComp;
