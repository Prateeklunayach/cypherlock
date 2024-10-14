import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
