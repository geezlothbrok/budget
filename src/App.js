import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Dashboard  from "../src/pages/Dashboard";
import Login from "../src/pages/auth/login/Login";
import Register from "../src/pages/auth/register/Register";
import Reset from "../src/pages/auth/reset/Reset";
import AddNew from "../src/pages/AddNew";
import NavBar from "./components/navigation/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
       <NavBar/>
        <Routes>
        <Route path="/" element = { <Dashboard/>}/>
        <Route path="/add" element = { <AddNew/>}/>
        <Route path="/login" element = { <Login/>}/>
        <Route path="/register" element = { <Register/>}/>
        <Route path="/reset" element = { <Reset/>}/>
        
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
