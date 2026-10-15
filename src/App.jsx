import { useCallback, useEffect, useState } from 'react';
import ListaAnimes from './components/ListaAnimes';
import FormularioAnime from './components/FormularioAnime';
import CarrosselImagens from './components/CarrosselImagens';
import Home from './components/home';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { listarAnimes } from './services/api';

function App() {
  const [animes, setAnimes] = useState([]);

  // Busca a lista uma única vez e compartilha com todos os componentes
  const carregarAnimes = useCallback(() => {
    listarAnimes()
      .then(setAnimes)
      .catch((error) => console.error('Erro ao buscar dados dos animes:', error));
  }, []);

  useEffect(() => {
    carregarAnimes();
  }, [carregarAnimes]);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Site de Avaliação de Animes</Navbar.Brand>
        </Container>
      </Navbar>

      <Home animes={animes} />

      <Container className="mt-4">
        <Row>
          <Col>
            <CarrosselImagens animes={animes} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <FormularioAnime onAnimeAdicionado={carregarAnimes} />
          </Col>
          <Col md={6}>
            <ListaAnimes animes={animes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
