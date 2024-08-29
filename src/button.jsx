import { Link } from "react-router-dom";
import './styles.scss';

const Button=()=>{
 return(
    <div>
    
    <Link to='/'>
    <button className="btn-reset1"></button>
    </Link>
    <Link to="./twoplayer.jsx" target='_self'>
    <button className="btn-reset2" ></button>
    </Link>
    </div>
 );
}
export default Button;