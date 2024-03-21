import { Link } from "react-router-dom";

const EnterButton = () => {
    return(
      <div>
        <Link to="User_Page">
          <button className="EnterButton" > Entrar </button>
        </Link>
      </div>
    );
}
export default EnterButton;


