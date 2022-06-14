import aboutLogo from "../../assets/images/about_logo.png";
import react from 'react';
import applePng from '../../assets/images/apple.png';
import googlePng from '../../assets/images/google.png';
import "../../components/Aboutus/AboutUs.scss";


function AboutUsComp() {
  return (
    <div className="AboutUsComp_body">
      <div className="AboutUsComp_aboutLogo">
      <img  src={aboutLogo}/>
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
      <div>
        <h1 className="AboutUsComp_title">ABOUT US:</h1>
          <p className="AboutUsComp_parograph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum.
        </p>
      </div>
    </div>
  );
}
export default AboutUsComp;
