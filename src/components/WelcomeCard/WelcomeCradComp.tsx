import "../WelcomeCard/welcomeCard.scss";
import searchLogo from "../../assets/images/search.png";
import { useState } from "react";
import {getDataBySearchItem} from '../../services/api_service'


const WelcomeCardComp=()=> {
  const [searchByItem, setSearchByItem] = useState("");
  const handleChanges=(event: any)=> {
    const value = event.target.value;
    setSearchByItem(value);
  }
  const searchObject=()=> {
    let data= getDataBySearchItem(searchByItem);
    console.log(data);
    setSearchByItem("");
  }

  return (
    <div className="welcome-comp-body">
      <div className="welcome-comp-card">
        <h1 className="welcome-comp-title">
          Epicure works with the top chef restaurants in Tel Aviv
        </h1>
        <div className="welcome-comp-search-field">
          <form>
            <div className="welcome-comp-search-input">
              <img
                src={searchLogo}
                className="welcome-comp-img"
                onClick={searchObject}
              />
              <input
                value={searchByItem}
                placeholder=" Search for restaurant cuisine, chef"
                className="welcome-comp-input "
                onChange={handleChanges}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCardComp;
