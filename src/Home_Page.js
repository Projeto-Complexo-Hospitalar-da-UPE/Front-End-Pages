import React from 'react';
import { Link } from 'react-router-dom';
import './index_Home_Page.css';
import UserInput from './Components/HP_components/UserInput'
import UserLogin from './Components/HP_components/UserLogin'
import EnterButton from './Components/HP_components/EnterButton'
import User_Page from './User_Page'


function Home_page() {

    const user = "Usuário"
    const log = "Login"
    const background = './Images_Folder/HP_png/img2.jpg'
    const UPE = "Universidade de Pernambuco"
    const Poli = "Escola Politécnica de Pernambuco"
    
    return (
      <div className="Center">
        <div className="Blur"></div>
  
        <img className = "SCH_HP" src = "./Images_Folder/sch.png"></img>
  
        <div className= 'container_Login_Icon'>
          <img className= 'User_icon' src = "./Images_Folder/HP_png/User_png.png"></img>
          <img className= 'Login_icon' src = "./Images_Folder/HP_png/Login_png.png"></img>
        </div>
  
  
        <div className='container_UPE_content'>
          <p className='UPE_text'> {UPE} </p>
          <img className = "UPE_logo" src = "./Images_Folder/Logo-upe-site.png"></img>
        </div>
        
        <div className='container_Poli_content'>
          <p className='Poli_text'> {Poli} </p> 
          <img className= 'Poli_logo' src = "./Images_Folder/Poliupe.png"></img>
        </div>
          <UserInput/>
          <UserLogin/>
          <Link to="/User_Page">
            <EnterButton/>
          </Link>
      </div>
  
    );
};

export default Home_page;