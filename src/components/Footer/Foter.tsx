import { jsx } from "@emotion/react";
import React from "react";
import PopUpComp from "../PopUp/PopUp";
import "../Footer/Footer.scss";

const FooterPage = () => {
  return (
    <div className="footer-page-footer">
      <p className="href">Contact Us</p>
      <br />
      <p className="href">Term of Use</p>
      <br />
      <p className="href">Privacy Policy</p>
    </div>
  );
};

export default FooterPage;
