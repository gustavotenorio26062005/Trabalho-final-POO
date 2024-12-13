import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CarrosselImagens = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch('/animes')
      .then(response => response.json())
      .then(data => setAnimes(data));
  }, []);

  return (
    <Carousel>
      {animes.map((anime, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={anime[4]} // Índice 4 corresponde à coluna imagem_url
            alt={anime[1]} // Índice 1 corresponde à coluna título
          />
          <Carousel.Caption>
            <h3>{anime[1]}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarrosselImagens;