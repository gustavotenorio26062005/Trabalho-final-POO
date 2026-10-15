import { ListGroup, ListGroupItem, Card } from 'react-bootstrap';

const ListaAnimes = ({ animes }) => {
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