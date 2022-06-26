import "../FilterNav/filterNav.scss";
export interface FilterProps {
  onClickAction: Function;
  labels: string[];
  classNameStyleUL: string;
  classNameStyleLI:string;
}
const FilterNav: React.FC<FilterProps> = ({
  onClickAction,
  labels,
  classNameStyleUL,
  classNameStyleLI
}) => {
  return (
   
      <ul className={classNameStyleUL}>
        {labels.map((lable: string, index) => (
          <li className={classNameStyleLI} onClick={()=>onClickAction(lable)} key={index}>
            {lable}
          </li>
        ))}
      </ul>
    
  );
};
export default FilterNav;
