import { BsChevronDoubleRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import '../GoTo/goTo.scss';
export interface GoToProps {
  text: string;
  where:string
}

const GoTo: React.FC<GoToProps> = ({ text,where }) => {
  return (
    <NavLink to={where} className="go-to">
      {text}<BsChevronDoubleRight/>
    </NavLink>
  );
};
export default GoTo;
