
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import PhoneSurvey from './pages/PhoneSurvey'
import AddPhone from './pages/AddPhone';
import Footer from './components/Footer/Footer';
import PhoneList from "./pages/PhoneList";
import HistoryList from "./pages/HistoryList";



function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phonesurvey' element={<PhoneSurvey/>} />
        <Route path='/addphone' element={<AddPhone/>} />
      </Routes>
      <Footer />
    </Router>

  )
=======
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
>>>>>>> dev
}

export default App;
