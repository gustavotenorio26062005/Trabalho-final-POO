import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const FormularioAnime = () => {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [popularidade, setPopularidade] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoAnime = { 
      titulo, 
      genero, 
      popularidade: parseInt(popularidade), 
      imagem_url: imagemUrl 
    };

    fetch('http://localhost:5000/animes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoAnime),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao adicionar o anime');
        }
        return response.json();
      })
      .then(data => {
        console.log('Anime adicionado:', data);
        setTitulo('');
        setGenero('');
        setPopularidade('');
        setImagemUrl('');
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <Card>
      <Card.Header as="h2">Adicionar Novo Anime</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o título do anime"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGenero">
            <Form.Label>Gênero</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o gênero do anime"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPopularidade">
            <Form.Label>Popularidade</Form.Label>
            <Form.Control
              type="number"
              placeholder="Digite a popularidade do anime"
              value={popularidade}
              onChange={(e) => setPopularidade(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formImagemUrl">
            <Form.Label>URL da Imagem</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a URL da imagem do anime"
              value={imagemUrl}
              onChange={(e) => setImagemUrl(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Adicionar Anime
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormularioAnime;
