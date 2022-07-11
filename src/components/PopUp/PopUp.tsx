import "../PopUp/popUp.scss";
import bagLogo from "../../assets/images/bagLogo.png";
import searchLogo from "../../assets/images/search.png";
import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();
  const goToRestaurantsPage = () => {
    navigate("/restaurants");
    onClickAction("")
  };
  const [searchByItem, setSearchByItem] = useState("");

  const handleChanges = (event: any) => {
    const value = event.target.value;
    setSearchByItem(value);
  };

  if (popup?.localeCompare("menu") == 0) {
    return (
      <div className="popup-menu-body">
        <div className="close-button" onClick={() => onClickAction("")}>
          X
        </div>
        <ul className="ul">
          <li className="li">
            <a onClick={goToRestaurantsPage} className="a">
              Restaurants
            </a>
          </li>
          <li className="li-none">
            <a  className="a">
              Chefs
            </a>
          </li>
        </ul>
        <hr />
        <ul className="ul">
          <li className="li-none">
            <a  className="a">
              Contact Us
            </a>
          </li>
          <li className="li-none">
            <a  className="a">
              Term of Use
            </a>
          </li>
          <li className="li-none">
            <a  className="a">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    );
  } else if (popup?.localeCompare("search") == 0) {
    return (
      <div className="popup-search-body">
        <div className="close-button" onClick={() => onClickAction("")}>
          X
        </div>
        <SearchInput />
      </div>
    );
  } else if (popup?.localeCompare("bag") == 0) {
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
  }
  return <div></div>;
};

export default PopUpComp;
