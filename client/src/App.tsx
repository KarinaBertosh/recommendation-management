import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import WelcomePage from './pages/Landing/WelcomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="content">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
