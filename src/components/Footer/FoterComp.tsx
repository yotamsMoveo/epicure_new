import { jsx } from "@emotion/react";
import React from "react";
import PopUpComp from "../PopUp/PopUpComp";
import "../Footer/Footer.scss";

const FooterPage = () => {
  const openPopUp = (selectedPopUp: string) => {
    return (
      <React.Fragment>
        {<PopUpComp selectedPopUp={selectedPopUp} />}
      </React.Fragment>
    );
  };

  return (
    <div className="footer-page-footer">
      <p
        className="footer-page-footer-href"
        onClick={() => openPopUp("conact")}
      >
        Contact Us
      </p>
      <br />
      <p onClick={() => openPopUp("terms")} className="footer-page-footer-href">
        Term of Use
      </p>
      <br />
      <p
        onClick={() => openPopUp("privacy")}
        className="footer-page-footer-href"
      >
        Privacy Policy
      </p>
    </div>
  );
};

export default FooterPage;
