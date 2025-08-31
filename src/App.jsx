import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Features from './pages/Features';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/feature' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
