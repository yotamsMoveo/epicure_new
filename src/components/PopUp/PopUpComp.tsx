import { IconButton } from "@material-ui/core";
import "../PopUp/popUp.scss";
import { CloseButton } from "react-bootstrap";
import bagLogo from "../../assets/images/bagLogo.png";
import searchLogo from "../../assets/images/search.png";
import { useState } from "react";
import { getDataBySearchItem } from "../../services/api_service";

const PopUpComp=(props: any)=> {
  const [searchByItem, setSearchByItem] = useState("");

  const handleChanges=(event: any)=> {
    const value = event.target.value;
    setSearchByItem(value);
  }
  const searchObject=()=> {
    let data = getDataBySearchItem(searchByItem);
    console.log(data);
    setSearchByItem("");
  }

  let selected = 0;
  if ("menu".localeCompare(props.selectedPopUp) == 0) {
    selected = 2;
  } else if ("search".localeCompare(props.selectedPopUp) == 0) {
    selected = 3;
  } else if ("bag".localeCompare(props.selectedPopUp) == 0) {
    selected = 4;
  }

  switch (selected) {
    case 2:
      return (
        <div className="popup-menu-body">
          <IconButton  onClick={props.onClick}>
            <CloseButton>X</CloseButton>
          </IconButton>
          <ul className="popup-ul">
            <li className="popup-li">
              <a href="/restaurants" className="popup-a">
                Restaurants
              </a>
            </li>
            <li className="popup-li">
              <a href="#news" className="popup-a">
                Chefs
              </a>
            </li>
          </ul>
          <hr />
          <ul className="popup-ul">
            <li className="popup-li">
              <a href="#contact" className="popup-a">
                Contact Us
              </a>
            </li>
            <li className="popup-li">
              <a href="#about" className="popup-a">
                Term of Use
              </a>
            </li>
            <li className="popup-li">
              <a href="#about" className="popup-a">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div className="popup-menu-body">
          <IconButton onClick={props.onClick}>
            <CloseButton>X</CloseButton>
          </IconButton>
          <div className="popup-search-field">
            <form onSubmit={searchObject}>
              <div className="popup-search-input">
                <img
                  src={searchLogo}
                  className="popup-img"
                  onClick={searchObject}
                />
                <input
                  value={searchByItem}
                  placeholder=" Search for restaurant cuisine, chef"
                  className="popup-input"
                  onChange={handleChanges}
                ></input>
              </div>
            </form>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="popup-bag-body">
          <IconButton onClick={props.onClick}>
            <CloseButton>X</CloseButton>
          </IconButton>

          <div className="popup-bag-contant">
            <img src={bagLogo} className="popup-bag-img" />
            <p className="popup-bag-description">your bag is empty</p>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
}

export default PopUpComp;
