import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import PhoneSurvey from './pages/PhoneSurvey'
import Footer from './components/Footer/Footer';
import './App.css'

function App() {


  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/phonesurvey' element={<PhoneSurvey/>} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
