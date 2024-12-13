import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, Card } from 'react-bootstrap';

const ListaAnimes = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/animes')
      .then(response => response.json())
      .then(data => setAnimes(data));
  }, []);

  return (
    <Card>
      <Card.Header as="h2">Lista de Animes</Card.Header>
      <Card.Body>
        <ListGroup>
          {animes.map(anime => (
            <ListGroupItem key={anime.id}>
              <strong>{anime.titulo}</strong> - {anime.genero} - Popularidade: {anime.popularidade}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ListaAnimes;