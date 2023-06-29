
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import PhoneSurvey from './pages/PhoneSurvey'
import AddPhone from './pages/AddPhone';
import Footer from './components/Footer/Footer';
import PhoneList from "./pages/PhoneList";
import HistoryList from "./pages/HistoryList";
import AccordionDone from "./components/Accordion/Accordion";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonesurvey" element={<PhoneSurvey />} />
        <Route path="/addphone" element={<AddPhone />} />
        <Route path="/phonelist" element={<PhoneList />} />
        <Route path="/history" element={<HistoryList />} />
        <Route path="/faq" element={<AccordionDone />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
