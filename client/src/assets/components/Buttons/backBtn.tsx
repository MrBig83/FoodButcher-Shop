import { Link } from "react-router-dom";

const BackBtn = () => {
    return (
        <Link to={`/`}>
            <div className="backBtn"><p>Tillbaka</p></div>
        </Link>   
    );
  };
  export default BackBtn;
