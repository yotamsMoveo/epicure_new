import aboutLogo from "../../../../assets/images/about_logo.png";
import react from "react";
import applePng from "../../../../assets/images/apple.png";
import googlePng from "../../../../assets/images/google.png";
import "./AboutUs.scss";

const AboutUsComp = () => {
  const moveToAppStore=()=>{
    window.location.href='https://www.apple.com/app-store/';
  }
  const moveToGoogleStore=()=>{
    window.location.href='https://play.google.com/store/games?gl=IL&utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-il-1001280-Med-hasem-py-Evergreen-Oct2020-Text_Search_BKWS%7CONSEM_kwid_43700006963179949&gclid=EAIaIQobChMI25-poqDk-AIVRPlRCh2a2wB-EAAYASAAEgIqXvD_BwE&gclsrc=aw.ds';
  }
  return (
    <div className="about-us">
      <div className="body" >
        <div className="aboutLogo">
          <img src={aboutLogo} />
        </div>
        <div className="wrapper" >
          <div className="store-media-buttons-mobile">
            <button className="store-buttons"  onClick={moveToAppStore}>
              <img src={applePng} alt="apple store"  ></img>
              <div>
                <div className="store-buttons-upper-text" >Download on the</div>
                <div className="store-buttons-lower-text">App Store</div>
              </div>
            </button>
            <button className="store-buttons google-btn"  onClick={moveToGoogleStore}>
              <img src={googlePng} alt="google play"></img>
              <div>
                <div className="store-buttons-upper-text">Get in on</div>
                <div className="store-buttons-lower-text">Google Play</div>
              </div>
            </button>
          </div>
          <h1 className="title">ABOUT US:</h1>
          <p className="parograph" data-aos="zoom-in" data-aos-duration="1500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
            justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
            eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum.
          </p>
          <div className="store-media-buttons-desktop">
            <button className="store-buttons-desktop" onClick={moveToAppStore}>
              <img src={applePng} alt="apple store"></img>
              <div>
                <div className="store-buttons-upper-text-desktop">
                  Download on the
                </div>
                <div className="store-buttons-lower-text-desktop">
                  App Store
                </div>
              </div>
            </button>
            <button className="store-buttons-desktop google-btn" onClick={moveToGoogleStore}>
              <img src={googlePng} alt="google play"></img>
              <div>
                <div className="store-buttons-upper-text-desktop">
                  Get in on
                </div>
                <div className="store-buttons-lower-text-desktop">
                  Google Play
                </div>
              </div>
            </button>
          </div>
         
        </div>
        <div className="aboutLogo-desktop">
            <img src={aboutLogo} className="aboutLogo-desktop" />
          </div>
      </div>
    </div>
  );
};
export default AboutUsComp;
