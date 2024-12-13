// Home.js
import React, { useEffect, useState } from 'react';
import './home.css';  // Importando os estilos específicos para a home

function Home() {
  const [animes, setAnimes] = useState([]);

  // Função para buscar dados dos animes
  useEffect(() => {
    fetch('http://localhost:5000/api/animes')
      .then((response) => response.json())
      .then((data) => setAnimes(data))
      .catch((error) => console.error('Erro ao buscar dados dos animes:', error));
  }, []);

  return (
    <div className="home">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="site-name">Nome do Site</div>
        <div className="user-profile">
          <a href="/perfil">
            <img className="profile-pic" src="https://via.placeholder.com/50" alt="Perfil" />
          </a>
        </div>
      </header>

      <div className="carousels">
        {animes.map((anime, index) => (
          <div className="carousel" key={index}>
            <img className="anime-img" src={anime.imagem_url} alt={anime.titulo} />
            <p>{anime.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
