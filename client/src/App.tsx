import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import WelcomePage from './pages/Landing/WelcomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
