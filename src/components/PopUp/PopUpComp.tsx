import { IconButton } from "@material-ui/core";
import "../PopUp/popUp.scss";
import { CloseButton } from "react-bootstrap";
import bagLogo from "../../assets/images/bagLogo.png";

function PopUpComp(props: any) {
  function handlePopUpOpen() {
    console.log("close");
  }

  var selected = 0;
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
        <div className="popUp_menu_body">
          <IconButton className="Navbar_icon" onClick={props.onClick}>
            <CloseButton>X</CloseButton>
          </IconButton>
          <ul className="popUp_ul">
            <li className="popUp_li">
              <a href="#home" className="popup_a">
                Restaurants
              </a>
            </li>
            <li className="popUp_li">
              <a href="#news" className="popup_a">
                Chefs
              </a>
            </li>
          </ul>
          <hr />
          <ul className="popUp_ul">
            <li className="popUp_li">
              <a href="#contact" className="popup_a">
                Contact Us
              </a>
            </li>
            <li className="popUp_li">
              <a href="#about" className="popup_a">
                Term of Use
              </a>
            </li>
            <li className="popUp_li">
              <a href="#about" className="popup_a">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div className="popUp_menu_body">
          <IconButton className="Navbar_icon" onClick={props.onClick}>
            <CloseButton>X</CloseButton>
          </IconButton>
          <div className="popUp_searchField">
            <form>
              <input
                placeholder="Search for restaurant cuisine, chef"
                className="popUp_searchInput"
              ></input>
            </form>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="popup_bag_body">
          <IconButton className="Navbar_icon" onClick={props.onClick}>
            <CloseButton>X</CloseButton>
          </IconButton>

          <div className="popup_bag_contant">
            <img src={bagLogo} className="popup_bag_img" />
            <p className="bag_description">your bag is empty</p>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
}

export default PopUpComp;
