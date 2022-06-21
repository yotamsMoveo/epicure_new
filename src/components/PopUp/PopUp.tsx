import { IconButton } from "@material-ui/core";
import "../PopUp/popUp.scss";
import { CloseButton } from "react-bootstrap";
import bagLogo from "../../assets/images/bagLogo.png";
import searchLogo from "../../assets/images/search.png";
import { useState } from "react";
import { getDataBySearchItem } from "../../services/api_service";
import CardComp from "../Card/Card";

export interface PopupProps {
  popupType?: PopupType;
  onClickAction: Function;
  isOpen?: boolean;
  popup?: string;
}

export enum PopupType {
  Menu = "menu",
  Search = "search",
  Bag = "bag",
  NewOrder = "new_order",
}
const PopUpComp: React.FC<PopupProps> = (
  { popupType, onClickAction, isOpen, popup },
  { orders_to_show }
) => {
  const [searchByItem, setSearchByItem] = useState("");

  const handleChanges = (event: any) => {
    const value = event.target.value;
    setSearchByItem(value);
  };
  const searchObject = () => {
    let data = getDataBySearchItem(searchByItem);
    console.log(data);
    setSearchByItem("");
  };

  let selected = 0;
  if (popup == "menu") {
    selected = 2;
  } else if (popup == "search") {
    selected = 3;
  } else if (popup == "bag") {
    selected = 4;
  } else if (popup == "new_order") {
    selected = 5;
  }

  switch (selected) {
    case 2:
      return (
        <div className="popup-menu-body">
          {/* <IconButton onClick={()=>onClickAction("")}>
            <CloseButton>X</CloseButton>
          </IconButton> */}
          <div className="close-button" onClick={() => onClickAction("")}>
            X
          </div>
          <ul className="ul">
            <li className="li">
              <a href="/restaurants" className="a">
                Restaurants
              </a>
            </li>
            <li className="li">
              <a href="#news" className="a">
                Chefs
              </a>
            </li>
          </ul>
          <hr />
          <ul className="ul">
            <li className="li">
              <a href="#contact" className="a">
                Contact Us
              </a>
            </li>
            <li className="li">
              <a href="#about" className="a">
                Term of Use
              </a>
            </li>
            <li className="li">
              <a href="#about" className="a">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div className="popup-search-body">
          <div className="close-button" onClick={() => onClickAction("")}>
            X
          </div>
          <div className="search-field">
            <form onSubmit={searchObject}>
              <div className="search-input">
                <img src={searchLogo} className="img" onClick={searchObject} />
                <input
                  value={searchByItem}
                  placeholder=" Search for restaurant cuisine, chef"
                  className="input"
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
          <div className="close-button" onClick={() => onClickAction("")}>
            X
          </div>

          <div className="contant">
            <img src={bagLogo} className="img" />
            <p className="description">your bag is empty</p>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
};

export default PopUpComp;
