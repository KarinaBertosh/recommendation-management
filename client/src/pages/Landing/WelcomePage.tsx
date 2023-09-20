import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import books from '../../assets/books.jpg';
import games from '../../assets/games.jpg';
import films from '../../assets/films.jpg';

function LandingPage() {
  const [t] = useTranslation();

  return (
    <div className="content">
      <div className="landing">
        <p >{t('welcomePage.hello')}</p>
        <p>{t('welcomePage.description')}</p>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={books} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={films} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={games} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Предыдущий</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Следующий</span>
          </button>
        </div>

        <p>{t('welcomePage.auth')}</p>



      </div>
    </div>
  );
}

export default LandingPage;
