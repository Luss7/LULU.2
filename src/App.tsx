// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import BottomNavigationBar from './components/BottomNavigationBar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
        <BottomNavigationBar />
      </Container>
    </Router>
  );
}

export default App;
