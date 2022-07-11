import IconButton from "@material-ui/core/IconButton";
import "../../components/Navbar/Navbar.scss";
import mainlogo from "../../assets/images/mainlogo.png";
import desktoplogo from "../../assets/images/desktoplogo.png";
import searchlogo from "../../assets/images/search.png";
import bagLogo from "../../assets/images/bagLogo.png";
import conactUsLogo from "../../assets/images/conactUsLogo.png";
import { HamburgerIcon } from "react-hamburger-icon";
import PopUpComp, { PopupProps, PopupType } from "../PopUp/PopUp";
import hamburg from "../../assets/images/hamburg.png";
import { useNavigate } from "react-router-dom";

export interface NavbarProps {
  onClickAction: Function;
  isOpen?: boolean;
  popup?: string;
  navigate: Function;
}

const Navbar: React.FC<NavbarProps> = ({
  onClickAction,
  isOpen,
  popup,
  navigate,
}) => {
  const navigateComponent = useNavigate();
  const goTo = (nv: string) => {
    if (nv == "Restaurants") {
      navigateComponent("/Restaurants");
    }
    if (nv == "Menu") {
      navigateComponent("/");
    }
  };

  return (
    <div>
      <div className="navbar-conteiner">
        <div className="leftside">
          <img src={hamburg} onClick={() => onClickAction("menu")} />
        </div>
        <div className="center">
          <img className="mobile" src={mainlogo} onClick={() => goTo("Menu")} />
          <div className="desktop">
            <img
              className="desktop-img"
              src={desktoplogo}
              onClick={() => goTo("Menu")}
            />
            <ul className="desktop-ul">
              <li className="li">
                <a onClick={() => goTo("Restaurants")} className="a">
                  Restaurants
                </a>
              </li>
              <li className="li-none">
                <a className="a">Chefs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightSide">
          <img src={searchlogo} onClick={() => onClickAction("search")} />
          <img src={conactUsLogo} />
          <img src={bagLogo} onClick={() => onClickAction("bag")} />
        </div>
        {{ isOpen } && (
          <PopUpComp popup={popup} onClickAction={onClickAction} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
