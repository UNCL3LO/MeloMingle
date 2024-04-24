import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Welcome from './welcome';
import SplashScreen from './splashScreen';
import PhoneRegistration from './PhoneRegistration';
import BackgroundMusic from './BackgroundMusic';
import Friend from './Friend';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide splash screen after a certain delay
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <Router>
    
    <div className="App">
      {loading ? (
       <>
       <SplashScreen/>
       </>
        
      ) : (
        <>
        <div className='Container'>
      
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/PhoneRegistration/Login" element={<BackgroundMusic/>} />

      <Route  path="/PhoneRegistration" element={<PhoneRegistration />} />
      <Route  path="/PhoneRegistration/BackgroundMusic" element={<BackgroundMusic/>} />

  
      </Routes>
      </div>
      </>
      )}
      </div>
</Router>
  );
}


export default App;

