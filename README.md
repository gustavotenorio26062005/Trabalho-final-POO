# Anime List — Site de Avaliação de Animes

Trabalho final da disciplina de Programação Orientada a Objetos (Análise e Desenvolvimento de Sistemas — IFSP). Aplicação web com front-end em React e uma API em Flask que lista animes cadastrados e permite adicionar novos.

## Funcionalidades

- Página inicial com faixa horizontal de capas dos animes
- Carrossel de imagens com os animes cadastrados
- Formulário para cadastrar um anime (título, gênero, popularidade e URL da imagem)
- Lista de animes atualizada automaticamente após cada cadastro

## Tecnologias

**Front-end:** React 18, Vite 5, React Bootstrap / Bootstrap 5, ESLint
**Back-end:** Python, Flask, Flask-CORS, SQLite

## Como rodar

Pré-requisitos: Node.js 18+ e Python 3.

### 1. Back-end (API Flask)

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python setup_db.py               # cria animes.db com 3 animes de exemplo
python app.py                    # API em http://localhost:5000
```

### 2. Front-end (React)

Em outro terminal:

```bash
npm install
npm run dev                      # abre em http://localhost:5173
```

## API

| Método | Rota      | Descrição |
|--------|-----------|-----------|
| GET    | `/animes` | Lista todos os animes |
| POST   | `/animes` | Cadastra um anime. Corpo: `{"titulo", "genero", "popularidade", "imagem_url"}` |

Além do SQLite, cada anime cadastrado também é registrado em `animes.json`.

## Estrutura

```
├── app.py                 # API Flask
├── setup_db.py            # criação das tabelas (usuarios, animes, avaliacoes) e dados iniciais
├── requirements.txt
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx            # carrega os animes e repassa aos componentes
    ├── services/api.js    # chamadas HTTP para a API
    └── components/
        ├── home.jsx
        ├── CarrosselImagens.jsx
        ├── FormularioAnime.jsx
        └── ListaAnimes.jsx
```

## Próximos passos

As tabelas `usuarios` e `avaliacoes` já existem no banco, mas ainda não são usadas pela aplicação. A ideia é implementar cadastro de usuários e avaliações (nota e comentário) por anime.

## Aprendizados

- Componentização em React com hooks (`useState`, `useEffect`, `useCallback`) e estado compartilhado via props
- Consumo de API REST com `fetch`
- Criação de API REST com Flask e persistência em SQLite com consultas parametrizadas
- Integração front-end/back-end com CORS
