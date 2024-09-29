import { Link } from "react-router-dom";
import './styles.scss';

const Button=()=>{
 return(
    <div className="app1">
      <Link to="./Computer.jsx" >
      <button >Human vs Computer</button>
      </Link>
      <Link to="./twoplayer.jsx" replace>
      <button>Two players</button>
      </Link>
    </div>
 );
}
export default Button;

