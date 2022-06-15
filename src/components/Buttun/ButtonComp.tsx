
import Button from '@mui/material/Button';
// import Restaurant from '../../pages/Restaurant';
import * as React from "react";

const ButtonComp=(props:any)=>{
    const DoSomething=()=>{
        console.log(props.buttonName);
        // switch(props.buttonName){
        //     case 'search':
        //         return(<Restaurant/>)
        // }

    }
    return(<Button variant="outlined" onClick={DoSomething}>{props.buttonName}</Button>);

}
export default ButtonComp;