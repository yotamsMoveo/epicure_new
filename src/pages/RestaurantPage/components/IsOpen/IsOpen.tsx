
import clock from '../../../../assets/images/clock.png';
import  '../IsOpen/IsOpen.scss';

const IsOpen=()=>{
    return(<div className="open-body">
        <img src={clock}/>
        <text>Open now</text>
    </div>)

}
export default IsOpen;