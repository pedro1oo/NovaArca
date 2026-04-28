import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chapters from './pages/Chapters'
import ChapterReader from './pages/ChapterReader'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="scanline-overlay" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capitulos" element={<Chapters />} />
        <Route path="/capitulos/:slug" element={<ChapterReader />} />
      </Routes>
    </div>
  )
}

export default App
