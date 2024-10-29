import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/blog';
import Home from './components/home';
import Team from './components/team';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;
