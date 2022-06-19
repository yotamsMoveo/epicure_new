import IconButton from "@material-ui/core/IconButton";
import "../../components/Navbar/Navbar.scss";
import mainlogo from "../../assets/images/mainlogo.png";
import searchlogo from "../../assets/images/search.png";
import bagLogo from "../../assets/images/bagLogo.png";
import conactUsLogo from "../../assets/images/conactUsLogo.png";
import { HamburgerIcon } from "react-hamburger-icon";
import PopUpComp, { PopupProps, PopupType } from "../PopUp/PopUp";

export const Navbar:React.FC<PopupProps> = ({popupType,onClickAction,isOpen,popup}) => {

  return (
    <div>
      <div className="navbar-conteiner">
        <div className="leftside">
          <IconButton onClick={() => onClickAction("menu")}>
            <HamburgerIcon open={false} />
          </IconButton>
        </div>
        <div className="center">
          <img src={mainlogo} />
        </div>
        <div className="rightSide">
          <img
            src={searchlogo}
            onClick={() => onClickAction("search")}
            className="img"
          />
          <img src={conactUsLogo} className="img" />
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
