import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { MainPage } from './pages/MainPage/MainPage';
import { AboutPage } from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
