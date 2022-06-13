import "../WelcomeCard/welcomeCard.scss";
import searchLogo from '../../assets/images/search.png';

function WelcomeCardComp() {
  return (
    <div className="WelcomeCardComp_welcom">
      <div className="WelcomeCardComp_card">
        <h1 className="WelcomeCardComp_card_title">
          Epicure works with the top chef restaurants in Tel Aviv
        </h1>
        <div className="WelcomeCardComp_searchField">
          <form>
            <input placeholder={<img src={searchLogo}/>+"  Search for restaurant cuisine, chef"} className="WelcomeCardComp_searchInput"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCardComp;
