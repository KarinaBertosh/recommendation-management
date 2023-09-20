import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import books from '../../assets/books.jpg';
import games from '../../assets/games.jpg';
import films from '../../assets/films.jpg';

export const DefaultCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={books}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={games}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={films}
        />
      </Carousel.Item>
    </Carousel>
  );
};
