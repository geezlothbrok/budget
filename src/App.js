import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Dashboard  from "../src/pages/Dashboard";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <div className="App">
       <NavBar/>
        <Routes>
        <Route path="/" element = { <Dashboard/>}/>
        </Routes>
       
    </div>
  );
}

export default App;
