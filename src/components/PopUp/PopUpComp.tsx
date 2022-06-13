import { IconButton } from "@material-ui/core";
import "../PopUp/popUp.scss";
import CloseIcon from "@material-ui/core/";
import Navbar from "../Navbar/Navbar";
import { CloseButton } from "react-bootstrap";

function PopUpComp(props: any) {
  function handlePopUpOpen() {
    console.log("close");
  }

  var selected = 0;
  if ("menu".localeCompare(props.selectedPopUp) == 0) {
    selected = 2;
  } else if ("search".localeCompare(props.selectedPopUp) == 0) {
    selected = 3;
  } else if ("conact".localeCompare(props.selectedPopUp) == 0) {
    selected = 4;
  } else if ("bag".localeCompare(props.selectedPopUp) == 0) {
    selected = 5;
  }

  switch (selected) {
    case 2:
      return (
        <div className="popUp_body">
          <IconButton className="Navbar_icon" onClick={props.onClick}>
            <CloseButton />
          </IconButton>
          <ul className="popUp_ul">
            <li className="popUp_li">
              <a href="#home">Restaurants</a>
            </li>
            <li className="popUp_li">
              <a href="#news">Chefs</a>
            </li>
            <hr />
            <li className="popUp_li">
              <a href="#contact">Contact Us</a>
            </li>
            <li className="popUp_li">
              <a href="#about">Term of Use</a>
            </li>
            <li className="popUp_li">
              <a href="#about">Privacy Policy</a>
            </li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div className="popUp_body">
          <IconButton className="Navbar_icon" onClick={props.onClick}>
            <CloseButton />
          </IconButton>
          <ul className="popUp_ul">
            <div className="WelcomeCardComp_searchField">
              <form>
                <input
                  placeholder="Search for restaurant cuisine, chef"
                  className="WelcomeCardComp_searchInput"
                ></input>
              </form>
            </div>
          </ul>
        </div>
      );

    case 4:
      return (
        <div className="popUp_body">
          <IconButton className="Navbar_icon" onClick={props.onClick}>
            <CloseButton />
          </IconButton>
          <ul className="popUp_ul">
            <li className="popUp_li">
              <a href="#home">Contact</a>
            </li>
          </ul>
        </div>
      );
    case 5:
      return (
        <div className="popUp_body">
          <IconButton className="Navbar_icon" onClick={props.onClick}>
            <CloseButton />
          </IconButton>
          <div>
            <p className="bag_description">your bag is empty</p>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
}

export default PopUpComp;
