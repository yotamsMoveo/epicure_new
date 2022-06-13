import "../WelcomeCard/welcomeCard.scss";
// import TextFieldComp from "../TextField/TextFieldComp";

function WelcomeCardComp() {
  return (
    <div className="WelcomeCardComp_welcom">
      <div className="WelcomeCardComp_card">
        <h1 className="WelcomeCardComp_card_title">
          Epicure works with the top chef restaurants in Tel Aviv
        </h1>
        <div className="WelcomeCardComp_searchField">
          <form>
            <input placeholder="Search for restaurant cuisine, chef" className="WelcomeCardComp_searchInput"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCardComp;
