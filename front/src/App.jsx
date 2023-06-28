import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PhoneSurvey from './pages/PhoneSurvey'
import AddPhone from './pages/AddPhone';
import './App.css'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phonesurvey' element={<PhoneSurvey/>} />
        <Route path='/addphone' element={<AddPhone/>} />
      </Routes>
    </Router>
  )
}

export default App
