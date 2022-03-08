
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Healthchartform from './components/HealthChartForm';
import React, { useContext, useState, createContext } from "react";


function App() {
  return (
    <div>
      <Header/>
      <Healthchartform/>
      {/* <Home /> */}
     
    </div>
  );
}

export default App;
