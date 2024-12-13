import sqlite3

# Conexão com o banco de dados
conn = sqlite3.connect('animes.db')
cursor = conn.cursor()

# Criação das tabelas e inserção de dados
cursor.execute('''
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS animes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    genero TEXT NOT NULL,
    popularidade INTEGER NOT NULL,
    imagem_url TEXT
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS avaliacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    anime_id INTEGER,
    comentario TEXT,
    nota INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (anime_id) REFERENCES animes(id)
)
''')

cursor.execute("INSERT INTO animes (titulo, genero, popularidade, imagem_url) VALUES ('Naruto', 'Ação', 95, 'https://wallpaperaccess.com/full/634467.jpg')")
cursor.execute("INSERT INTO animes (titulo, genero, popularidade, imagem_url) VALUES ('One Piece', 'Aventura', 98, 'https://wallpaperaccess.com/full/1267584.jpg')")
cursor.execute("INSERT INTO animes (titulo, genero, popularidade, imagem_url) VALUES ('Attack on Titan', 'Ação', 97, 'https://wallpaperaccess.com/full/354993.jpg')")

conn.commit()
conn.close()