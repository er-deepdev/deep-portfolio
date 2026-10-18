import { lazy, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'

const Overview = lazy(() => import('./pages/Overview').then((module) => ({ default: module.Overview })))
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })))
const Journey = lazy(() => import('./pages/Journey').then((module) => ({ default: module.Journey })))
const Experience = lazy(() => import('./pages/Experience').then((module) => ({ default: module.Experience })))
const Projects = lazy(() => import('./pages/Projects').then((module) => ({ default: module.Projects })))
const Skills = lazy(() => import('./pages/Skills').then((module) => ({ default: module.Skills })))
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })))

function App() {
  return (
    <Suspense fallback={<div className="route-loader" aria-label="Loading page"><span /></div>}>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="about" element={<About />} />
            <Route path="journey" element={<Journey />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </HashRouter>
    </Suspense>
  )
}

export default App
