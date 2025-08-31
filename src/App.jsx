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
import PlanAutoPool from './pages/plan/PlanAutoPool';
import PlanSingleLeg from './pages/plan/PlanSingleLeg';
import PlanGeneration from './pages/plan/PlanGeneration';
import PlanCrowdFunding from './pages/plan/PlanCrowdFunding';
import PlanCryptoCurrency from './pages/plan/PlanCryptoCurrency';
import PlanAdView from './pages/plan/PlanAdView';
import PlanBoard from './pages/plan/PlanBoard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/feature' element={<Features />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/plan/binary' element={<PlanBinary  />} />
        <Route path='/plan/matrix' element={<PlanMatrix />} />
        <Route path='/plan/singleleg' element={<PlanSingleLeg />} />
        <Route path='/plan/autopool' element={<PlanAutoPool />} />
        <Route path='/plan/generation' element={<PlanGeneration />} />
        <Route path='/plan/crowdfunding' element={<PlanCrowdFunding />} />
        <Route path='/plan/cryptocurrency' element={<PlanCryptoCurrency />} />
        <Route path='/plan/adview' element={<PlanAdView />} />
        <Route path='/plan/board' element={<PlanBoard />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
