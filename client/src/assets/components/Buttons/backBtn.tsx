import { Link } from "react-router-dom";

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
