import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Features from './pages/Features';
import PlanBinary from './pages/plan/PlanBinary';
import PlanMatrix from './pages/plan/PlanMatrix';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/feature' element={<Features />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/plan/binary' element={<PlanBinary />} />
        <Route path='/plan/matrix' element={<PlanMatrix />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
