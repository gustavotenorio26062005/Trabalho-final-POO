// App.jsx
import React from 'react';
import ListaAnimes from './components/ListaAnimes';
import FormularioAnime from './components/FormularioAnime';
import CarrosselImagens from './components/CarrosselImagens';
import Home from './components/home';  // Importa a nova página Home
import { Container, Navbar, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Site de Avaliação de Animes</Navbar.Brand>
        </Container>
      </Navbar>
      
      {/* A Home é renderizada aqui */}
      <Home />  {/* Exibindo a página inicial */}

      <Container className="mt-4">
        <Row>
          <Col>
            <CarrosselImagens />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <FormularioAnime />
          </Col>
          <Col md={6}>
            <ListaAnimes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;