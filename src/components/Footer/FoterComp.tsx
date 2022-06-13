import { jsx } from "@emotion/react";
import React from "react";
import PopUpComp from "../PopUp/PopUpComp";

const FooterPage = () => {
  function openPopUp(selectedPopUp: string) {
    return (
      <React.Fragment>
        {<PopUpComp selectedPopUp={selectedPopUp} />}
      </React.Fragment>
    );
  }

  return (
    <div className="FooterPage_footer">
      <p onClick={() => openPopUp("conact")} className="FooterPage_footer_href">
        Contact Us
      </p>
      <br />
      <p onClick={() => openPopUp("terms")} className="FooterPage_footer_href">
        Term of Use
      </p>
      <br />
      <p
        onClick={() => openPopUp("privacy")}
        className="FooterPage_footer_href"
      >
        Privacy Policy
      </p>
    </div>
  );
};

export default FooterPage;
