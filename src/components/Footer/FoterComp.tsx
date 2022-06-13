import { jsx } from "@emotion/react";
import React from "react";
import PopUpComp from "../PopUp/PopUpComp";
import '../Footer/Footer.scss';

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
      <p className="FooterPage_footer_href" onClick={() => openPopUp("conact")} >
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
