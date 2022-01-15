import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
// import About from './components/About.js';
import React, { useState } from 'react'
// import {
//   HashRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = () =>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","Success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light') 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode= {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode = {mode}/>
    </div>
    </>    
  );
}

export default App;
