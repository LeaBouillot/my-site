import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Resume from './pages/Resume.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import { BrowserRouter as Router, Route, Routes, Navigate} from'react-router-dom';
import "./App.css"

export default function App() {


  return (
<Router>
  <div>
    {/* <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="*" element={() => <Navigate to="/" replace />} />
    </Routes> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</Router>
  );
}