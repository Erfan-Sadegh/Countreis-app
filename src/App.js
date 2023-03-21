import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import CountryDetail from './pages/country-detail/CountryDetail'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <main className={`main-container ${darkTheme ? 'dark' : null}`}>
      <Routes>
        <Route exact path='/' element={<Header handleTheme={handleTheme} darkTheme={darkTheme} />}>
          <Route index element={<Home />} />
          <Route path='/:code' element={<CountryDetail />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
