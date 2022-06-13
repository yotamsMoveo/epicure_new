// import { ContentCutOutlined, PropaneSharp } from '@material-ui/core';
import  Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../Card/Card.scss";

function CardComp(props:any) {
  if (props.classNameProp.localeCompare("CardComp_big") == 0) {
    return (
      <div>
        <Card className="CardComp_body">
          <CardContent className={props.classNameProp}>
            <img className="CardComp_img" src={props.img}></img>
            <p className="CardComp_title">{props.title}</p>
            <p className="CardComp_description">{props.description}</p>
            <img className="CardComp_type" src={props.type}></img>
            <p className="CardComp_price">{props.price}</p>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div>
        <Card className="CardComp_body">
          <CardContent className={props.classNameProp}>
            <img className="CardComp_img" src={props.img}></img>
            <p className="CardComp_title">{props.title}</p>
            <p className="CardComp_description">{props.description}</p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default CardComp;
