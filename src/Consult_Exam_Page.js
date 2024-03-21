import React from 'react';
import { Link } from 'react-router-dom';
import './index_Consult_Exam_Page.css';
import LogOff_Button from './Components/UP_components/LogOff_Button'
import Consult_Button from './Components/UP_components/Consult_Button';
import Regist_Button from './Components/UP_components/Regist_Button';
import Return_Button from './Components/EP_components/Return_Button';
import Date_Picker from './Components/EP_components/Date_Picker';



function User_Page() {


    const Tittle = "Consultar Exames"

    return (
      <div className="Center">
        <div className="Bar"></div>
  
        <div className= 'container_Exam_Icons'>
          <img className= 'Consult_Icon' src = "./Images_Folder/UP_png/Consult_Icon.png"></img>
          <img className= 'Regist_Icon' src = "./Images_Folder/UP_png/Regist_Icon.png"></img>
        </div>
  
  
        <div className='container_Bar_Icons'>
            <img className = "UPE_logo_UP" src = "./Images_Folder/Logo-upe-site.png"></img>
            <img className = "SCH_UP" src = "./Images_Folder/sch.png"></img>
              <div className='container_Icon_Name'>
                <h1 className= "User_Name"> {Tittle} </h1>
                <img className= 'Doc_Icon' src = "./Images_Folder/UP_png/User_Doctor.png"></img>
              </div>
        </div>
          <Date_Picker/>
          <Consult_Button/>
          <Regist_Button/>
          <Link to="/">
            <Return_Button/>
          </Link>
          <Link to="/Consult_Exam_Page">
            <Consult_Button/>
          </Link>
      </div>
  
    );
};

export default User_Page;