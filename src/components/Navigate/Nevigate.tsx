import { NavigateItem } from "../../assets/interfaces/NevigateItem";
import "../Navigate/Navigate.scss";

const Nevigate = (listNav: NavigateItem) => {
  return (
    <div className="navigate-body">
      <div className="list-item">
        {/* <div className="item">{listNav.map((item: NavigateItem) => {})}</div> */}
      </div>
    </div>
  );
};
export default Nevigate;
