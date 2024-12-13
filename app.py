from flask import Flask, jsonify, request
import sqlite3
import json
import os
from flask_cors import CORS  # Importando o CORS

app = Flask(__name__)
CORS(app)  # Habilita o CORS para todas as rotas


# Função para salvar os dados no arquivo JSON
def salvar_no_json(dados):
    if os.path.exists('animes.json'):
        with open('animes.json', 'r') as f:
            animes = json.load(f)
    else:
        animes = []

    # Adiciona o novo anime na lista
    animes.append(dados)

    # Salva novamente no arquivo JSON
    with open('animes.json', 'w') as f:
        json.dump(animes, f, indent=4)

# Endpoint para obter os animes do banco de dados
@app.route('/animes', methods=['GET'])
def obter_animes():
    conn = sqlite3.connect('animes.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM animes")
    animes = cursor.fetchall()
    conn.close()
    
    animes_json = [
        {
            "id": anime[0],
            "titulo": anime[1],
            "genero": anime[2],
            "popularidade": anime[3],
            "imagem_url": anime[4]
        } 
        for anime in animes
    ]
    return jsonify(animes_json)

# Endpoint para adicionar um novo anime no banco de dados e no arquivo JSON
@app.route('/animes', methods=['POST'])
def adicionar_anime():
    try:
        novo_anime = request.get_json()
        titulo = novo_anime['titulo']
        genero = novo_anime['genero']
        popularidade = novo_anime['popularidade']
        imagem_url = novo_anime['imagem_url']

        # Salvar no banco de dados SQLite
        conn = sqlite3.connect('animes.db')
        cursor = conn.cursor()
        cursor.execute("INSERT INTO animes (titulo, genero, popularidade, imagem_url) VALUES (?, ?, ?, ?)", 
                       (titulo, genero, popularidade, imagem_url))
        conn.commit()
        conn.close()

        # Salvar no arquivo JSON
        salvar_no_json(novo_anime)

        return jsonify(novo_anime), 201
    except Exception as e:
        print(f"Erro ao adicionar o anime: {e}")
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
