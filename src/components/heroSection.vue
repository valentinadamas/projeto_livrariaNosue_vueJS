<script setup>
// Não precisa de lógica por enquanto, apenas a estrutura
import capaLivro from './icons/cem-anos-de-solidao 1.png'
</script>

<template>
  <section class="hero">
    <div class="hero-container">

      <div class="hero-conteudo">
        <span class="tag-destaque">Livro Destaque</span>

        <h1 class="titulo-livro">Cem anos de solidão</h1>

        <p class="descricao-livro">
          Neste clássico de Gabriel García Márquez, conheça as fabulosas aventuras dos
          Buendía-Iguarán, com seus milagres, fantasias e dramas que representam famílias
          do mundo inteiro. Romance fundamental na história da literatura, Cem anos de
          solidão apresenta uma das mais fascinantes aventuras literárias do século XX.
        </p>

        <button class="botao-acessar">Acessar página do livro</button>
      </div>

      <div class="hero-imagem">
        <img :src="capaLivro" alt="Capa do livro" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  background-color: #ffffff;
  padding: 60px 0;
  font-family: sans-serif;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

.hero-conteudo {
  flex: 1;
  max-width: 600px;
}

.tag-destaque {
  display: inline-block;
  border: 1px solid #27a86c;
  color: #27a86c;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 20px;
}

.titulo-livro {
  font-size: 3rem;
  color: #2b2b2b;
  margin: 0 0 20px 0;
  font-weight: bold;
}

.descricao-livro {
  color: #7f7f7f;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.botao-acessar {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.botao-acessar:hover {
  background-color: #1e8754;
}

.hero-imagem {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-imagem img {
  max-width: 350px;
  height: auto;
  border-radius: 4px;
}
</style>
