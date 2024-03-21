import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home_Page from './Home_Page';
import User_Page from './User_Page';
import Consult_Exam_Page from './Consult_Exam_Page';


const App = () => { 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home_Page/>}/> 
        <Route path="/User_Page" element={<User_Page/>}/>
        <Route path="/Consult_Exam_Page" element={<Consult_Exam_Page/>}/>
      </Routes>
    </Router>
  );
}

export default App;


