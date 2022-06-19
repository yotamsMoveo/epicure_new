import aboutLogo from "../../../../assets/images/about_logo.png";
import react from "react";
import applePng from "../../../../assets/images/apple.png";
import googlePng from "../../../../assets/images/google.png";
import "./AboutUs.scss";

const AboutUsComp = () => {
  return (
    <div className="about-us">
      <div className="body">
        <div className="aboutLogo">
          <img src={aboutLogo} />
        </div>
        <div className="store-media-buttons">
          <button className="store-buttons">
            <img src={applePng} alt="apple store"></img>
            <div>
              <div className="store-buttons-upper-text">Download on the</div>
              <div className="store-buttons-lower-text">App Store</div>
            </div>
          </button>
          <button className="store-buttons google-btn">
            <img src={googlePng} alt="google play"></img>
            <div>
              <div className="store-buttons-upper-text">Get in on</div>
              <div className="store-buttons-lower-text">Google Play</div>
            </div>
          </button>
        </div>
        <h1 className="title">ABOUT US:</h1>
        <p className="parograph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum
          bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis
          suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit
          urna, dignissim a vestibulum.
        </p>
      </div>
    </div>
  );
};
export default AboutUsComp;
