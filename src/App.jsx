
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import Navbar from './components/Navbar'
import ExperienceEducationPage from './pages/ExperienceEducationPage'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/projects/:name" element={<ProjectDetailsPage/>} />
      <Route path="/path" element={<ExperienceEducationPage/>} />
    </Routes>
    </>
  )
}

export default App;
