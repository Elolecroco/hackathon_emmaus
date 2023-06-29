
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import PhoneSurvey from './pages/PhoneSurvey'
import AddPhone from './pages/AddPhone';
import Footer from './components/Footer/Footer';
import PhoneList from "./pages/PhoneList";
import HistoryList from "./pages/HistoryList";
import Login from "./pages/Login";
import tokenStorage from "./hooks/tokenStorage";


function App() {
  
  const { removeToken, setToken, token } = tokenStorage();



  return !token 
  ?(
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </Router>
  )
  :(
    <Router>
      <Navbar removeToken={removeToken} token={token}/>
      <Routes>
      <Route path="*" element={<Navigate to="/"/>} />
        <Route path="/" element={<Home />} />
        <Route path="/phonesurvey" element={<PhoneSurvey />} />
        {token && token.role === 'admin'
        ?  <Route path="/addphone" element={<AddPhone/>} />
        : null }
        {token && token.role === 'admin'
        ?  <Route path="/phonelist" element={<PhoneList />} />
        : null}
        <Route path="/history" element={<HistoryList />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
