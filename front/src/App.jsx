import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhoneSurvey from "./pages/PhoneSurvey";
import "./App.css";
import PhoneList from "./pages/PhoneList";
import HistoryList from "./pages/HistoryList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonesurvey" element={<PhoneSurvey />} />
        <Route path="/phonelist" element={<PhoneList />} />
        <Route path="/history" element={<HistoryList />} />
      </Routes>
    </Router>
  );
}

export default App;
