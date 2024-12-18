import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import VerticalNavbar from './components/VerticalNav';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/vert" element={<VerticalNavbar />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
