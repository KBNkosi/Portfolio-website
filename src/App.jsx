import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <AnimatePresence mode='wait'>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
      </AnimatePresence>
      
     
     <Footer/>
    </Router>
    
    </>
  )
}

export default App