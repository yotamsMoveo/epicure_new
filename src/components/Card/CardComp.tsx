
import "../Card/Card.scss";

const CardComp=(props: any)=> {
  if (props.classNameProp.localeCompare("CardComp_big") == 0) {
    return (
        <div className={props.classNameProp}>
          <img className="CardComp_img" src={props.img}></img>
          <div className="CardComp_contant">
            <p className="CardComp_title">{props.title}</p>
            <p className="CardComp_description">{props.description}</p>
            <img className="CardComp_type" src={props.type}></img>
            <p className="CardComp_price">{props.price}</p>
          </div>
        </div>
    );
  } else {
    return (
      <div className="CardComp">
        <div className={props.classNameProp}>
          <img className="CardComp_img" src={props.img}></img>
          <div className="CardComp_contant">
            <p className="CardComp_title">{props.title}</p>
            <p className="CardComp_description">{props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComp;
