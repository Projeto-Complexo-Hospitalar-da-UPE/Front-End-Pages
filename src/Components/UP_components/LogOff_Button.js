import { Link } from "react-router-dom";

const LogOff_Button = () => {
    return(
      <div>
        <Link to="/">
          <button className="LogOff_Button"> LogOff </button>
        </Link>
      </div>
    );
};

export default LogOff_Button;