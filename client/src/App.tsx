import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
