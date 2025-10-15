import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FuturisticLanding from './components/FuturisticLanding';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FuturisticLanding />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/dashboard" element={<Dashboard />} />
        {/* fallback to landing for unknown routes */}
        <Route path="*" element={<FuturisticLanding />} />
      </Routes>
    </Router>
  );
}
