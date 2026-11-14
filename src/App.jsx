import { Navigate, Route, Routes } from 'react-router-dom'
import CaseStudy from './pages/CaseStudy.jsx'
import Home from './pages/Home.jsx'
import ScrollManager from './ScrollManager.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ScrollManager />
    </>
  )
}
