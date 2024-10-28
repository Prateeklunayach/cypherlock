import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/blog';
import Home from './components/home';
import Team from './components/team';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
 
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router> 
  );
}

export default App;
