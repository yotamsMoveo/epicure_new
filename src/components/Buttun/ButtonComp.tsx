
import Button from '@mui/material/Button';
import Restaurant from '../../pages/restaurant';
import * as React from "react";

function ButtonComp(props:any){
    function DoSomething(){
        console.log(props.buttonName);
        switch(props.buttonName){
            case 'search':
                return(<Restaurant/>)
        }

    }
    return(<Button variant="outlined" onClick={DoSomething}>{props.buttonName}</Button>);

}
export default ButtonComp;