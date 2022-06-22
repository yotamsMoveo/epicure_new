import "./welcomeCard.scss";
import searchLogo from "../../../../assets/images/search.png";
import { useState } from "react";
import { getDataBySearchItem } from "./WelcomeCardSlice";

const WelcomeCardComp = () => {
  const [searchByItem, setSearchByItem] = useState("");
 
  const  handleChanges= (event: any)=>  {
    const value = event.target.value;
    setSearchByItem(value);
    
  };

  /////////////////component
  return (
    <div className="welcome-comp-body">
      <div className="card">
        <div className="contant">
          <h1 className="title">
            Epicure works with the top chef restaurants in Tel Aviv
          </h1>
          <div className="search-field">
            <form>
              <div className="search-input">
                <img src={searchLogo} className="img" onClick={()=>getDataBySearchItem(searchByItem)} />
                <input
                  value={searchByItem}
                  placeholder=" Search for restaurant cuisine, chef"
                  className="input "
                  onChange={handleChanges}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCardComp;
