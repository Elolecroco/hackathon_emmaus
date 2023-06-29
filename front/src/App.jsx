
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import PhoneSurvey from './pages/PhoneSurvey'
import Footer from './components/Footer/Footer';
import PhoneList from "./pages/PhoneList";
import HistoryList from "./pages/HistoryList";



function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonesurvey" element={<PhoneSurvey />} />
        <Route path="/phonelist" element={<PhoneList />} />
        <Route path="/history" element={<HistoryList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
