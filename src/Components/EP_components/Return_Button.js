import { Link } from "react-router-dom";

const Return_Button = () => {
    return(
      <div>
        <Link to="/User_Page">
          <button className="Return_Button"> Voltar </button>
        </Link>
      </div>
    );
};

export default Return_Button;