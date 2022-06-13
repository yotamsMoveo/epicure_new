import * as React from "react";

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu';
import "../../components/Navbar/Navbar.scss";
import mainlogo from "../../assets/images/mainlogo.png";
import searchlogo from "../../assets/images/search.png";
import bagLogo from "../../assets/images/bagLogo.png";
import conactUsLogo from "../../assets/images/conactUsLogo.png";
import { HamburgerIcon } from 'react-hamburger-icon';
import PopUpComp from "../PopUp/PopUpComp";
import { useState } from "react";

export const Navbar = (props: any) => {

  var isOpen = props.isOpen;
  var popup = props.popup;
  return (
    <div>
      <div className="Navbar_conteiner">
        <div className="Navbar_leftside">
          <IconButton
            className="Navbar_icon"
            onClick={() => props.onClick("menu")}
          >
            <HamburgerIcon open={false} />
          </IconButton>
        </div>
        <div className="Navbar_center">
          <img src={mainlogo} />
        </div>
        <div className="Navbar_rightSide">
          <img src={searchlogo} onClick={() => props.onClick("search")} />
          <img src={conactUsLogo}  />
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
