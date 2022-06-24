
import clock from '../../../../assets/images/clock.png';
import  '../IsOpen/IsOpen.scss';

const IsOpen=()=>{
    return(<div className="open-body">
        <img src={clock}/>
        <p>Open now</p>
    </div>)

}
export default IsOpen;