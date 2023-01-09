import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Quote from "./Quote";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Reg from "./Reg";
import Cards from "./Cards"; 
import Services from "./Services";
import Contact from "./Contact";
// import {app} from "./FirebaseConfig";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
	<BrowserRouter>
  
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="/services" element={<Services/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/login" element={<Login/>}/>
			<Route path="/registration" element={<Reg/>}/>
			<Route path="*" element ={<Navigate to="/"/>}/>
		</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
