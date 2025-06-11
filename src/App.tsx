import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import { useEffect } from 'react';
import Quote from './pages/Quote';


function App() {
  return (
    <>
    <ScrollToHashElement/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/quote' element={<Quote/>}/>
      </Routes>
    </>
  );
}

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

export default App;
