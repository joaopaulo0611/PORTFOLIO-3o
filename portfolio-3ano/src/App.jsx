import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home';
import {Curriculo} from './pages/curriculo'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>
    </Router>
  )
}

export default App
