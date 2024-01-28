import { Link } from "react-router-dom";
import "./Buttons.css"
const BackBtn = () => {
    return (
        <button>
        <Link to={`/`}>
            <div className="backBtn"><p>Tillbaka</p></div>
        </Link> 
        </button>  
    );
  };
  export default BackBtn;
