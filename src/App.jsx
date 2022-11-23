import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navigation/Navbar'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Skills from './pages/Skills'
import Interest from './pages/Interests'
import Awards from './pages/Awards'

function App() {

  return (
    <div className="container">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/experiences" element={< Experiences/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/interests" element={<Interest/>}></Route>
          <Route path="/awards" element={<Awards />}></Route>
         
        </Routes>
    </div>
  )
}

export default App
