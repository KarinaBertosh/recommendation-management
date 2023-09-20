import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import WelcomePage from './pages/Landing/WelcomePage';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
