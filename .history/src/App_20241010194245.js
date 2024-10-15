import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Topic1 from './components/Topic1';
import Topic2 from './components/Topic2';
import Topic3 from './components/Topic3';
import Topic4 from './components/Topic4';
import Topic5 from './components/Topic5';
import Topic6 from './components/Topic6';
import Topic7 from './components/Topic7';
import Topic8 from './components/Topic8';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/topic1" element={<Topic1 />} />
        <Route path="/topic2" element={<Topic2 />} />
        <Route path="/topic3" element={<Topic3 />} />
        <Route path="/topic4" element={<Topic4 />} />
        <Route path="/topic5" element={<Topic5 />} />
        <Route path="/topic6" element={<Topic6 />} />
        <Route path="/topic7" element={<Topic7 />} />
        <Route path="/topic8" element={<Topic8 />} />
      </Routes>
    </Router>
  );
}

export default App;
