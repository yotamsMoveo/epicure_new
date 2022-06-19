import { jsx } from "@emotion/react";
import React from "react";
import PopUpComp from "../PopUp/PopUp";
import "../Footer/Footer.scss";

const FooterPage = () => {
  const openPopUp = (selectedPopUp: string) => {
    return (
      <React.Fragment>
        {/* {<PopUpComp selectedPopUp={selectedPopUp} />} */}
      </React.Fragment>
    );
  };

  return (
    <div className="footer-page-footer">
      <p
        className="href"
        onClick={() => openPopUp("conact")}
      >
        Contact Us
      </p>
      <br />
      <p onClick={() => openPopUp("terms")} className="href">
        Term of Use
      </p>
      <br />
      <p
        onClick={() => openPopUp("privacy")}
        className="href"
      >
        Privacy Policy
      </p>
    </div>
  );
};

export default FooterPage;
