
import IconButton from '@material-ui/core/IconButton'
import "../../components/Navbar/Navbar.scss";
import mainlogo from "../../assets/images/mainlogo.png";
import searchlogo from "../../assets/images/search.png";
import bagLogo from "../../assets/images/bagLogo.png";
import conactUsLogo from "../../assets/images/conactUsLogo.png";
import { HamburgerIcon } from 'react-hamburger-icon';
import PopUpComp from "../PopUp/PopUpComp";

export const Navbar = (props: any) => {

  let isOpen = props.isOpen;
  let popup = props.popup;
  return (
    <div>
      <div className="navbar-conteiner">
        <div className="navbar-leftside">
          <IconButton
            onClick={() => props.onClick("menu")}
          >
            <HamburgerIcon open={false} />
          </IconButton>
        </div>
        <div className="navbar-center">
          <img src={mainlogo} />
        </div>
        <div className="navbar-rightSide">
          <img src={searchlogo} onClick={() => props.onClick("search")} className="img"/>
          <img src={conactUsLogo}  className="img"/>
          <img src={bagLogo} onClick={() => props.onClick("bag")} />
        </div>
        {{ isOpen } && (
          <PopUpComp selectedPopUp={props.popup} onClick={props.onClick} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
