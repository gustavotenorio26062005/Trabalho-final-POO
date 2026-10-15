// URL base da API Flask (app.py)
export const API_URL = 'http://localhost:5000';

export async function listarAnimes() {
  const response = await fetch(`${API_URL}/animes`);
  if (!response.ok) {
    throw new Error('Erro ao buscar animes');
  }
  return response.json();
}

export async function adicionarAnime(anime) {
  const response = await fetch(`${API_URL}/animes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(anime),
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar o anime');
  }
  return response.json();
}
