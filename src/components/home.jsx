import './home.css';  // Importando os estilos específicos para a home

function Home({ animes }) {
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
        {animes.map((anime) => (
          <div className="carousel" key={anime.id}>
            <img className="anime-img" src={anime.imagem_url} alt={anime.titulo} />
            <p>{anime.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
