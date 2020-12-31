import React from "react"
import './App.css';
import {Routes} from "./Routes/Routes"
import LandingPage from './components/Landing/LandingPage';


function App() {
  return (
    <div className="App">
      <Routes></Routes>
      {/* <LandingPage/> */}
    </div>
  );
}

export default App;

