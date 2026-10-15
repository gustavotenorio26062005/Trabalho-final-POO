import { Carousel } from 'react-bootstrap';

const CarrosselImagens = ({ animes }) => (
  <Carousel>
    {animes.map((anime) => (
      <Carousel.Item key={anime.id}>
        <img className="d-block w-100" src={anime.imagem_url} alt={anime.titulo} />
        <Carousel.Caption>
          <h3>{anime.titulo}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default CarrosselImagens;
