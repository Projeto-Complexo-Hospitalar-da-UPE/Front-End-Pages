import { Link } from "react-router-dom";


const Consult_Button = () => {
    return(
      <div>
        <Link to="/Consult_Exam_Page">
          <button className="Consult_Button"> Consultar Exame </button>
        </Link>
      </div>
    );
};
export default Consult_Button;



