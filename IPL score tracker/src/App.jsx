import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, LiveScores, Schedule, Teams, Stats, News } from './pages/entry.js'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LiveScores" element={<LiveScores />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
