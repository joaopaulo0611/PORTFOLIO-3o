import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home';
import {Curriculo} from './pages/curriculo'
import {Materias} from './pages/materias'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/materias" element={<Materias />} />
      </Routes>
    </Router>
  )
}

export default App
