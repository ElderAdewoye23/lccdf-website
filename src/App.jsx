import React from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          {/* Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
