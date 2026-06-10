<script setup>

import { RouterLink } from 'vue-router'

const emit = defineEmits(['pesquisar'])

function acionarPesquisa() {
  emit('pesquisar')
}
</script>
<template>
  <header class="header">
    <div class="logo">
      <RouterLink class="logo" to="/">
  <strong>IFbooks</strong>
</RouterLink> <small>Apreço a leitura</small>
    </div>
    <div class="busca">
      <input type="text" placeholder="Pesquisar" />
      <button @click="acionarPesquisa"><img src="/public/images/64673.png" alt="Pesquisar" max-width="20px" height="20px"></button> 
    </div>

    <nav class="menu">
      <a href="#">Termos</a>
      <a href="#">Equipe</a>
      <a href="#">Envio</a>
      <a href="#">Devoluções</a>
    </nav>

    <div class="acoes">
      <RouterLink to="/carrinho">🛍️</RouterLink>
      <button class="favorito">❤️<span class="contador">1</span></button>
      <button>👤</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
  font-family: sans-serif;
}

.a.logo {
  text-decoration: none;
}

a.logo:visited {
  color:#27a86c;
}

.logo strong {
  font-size: 2rem;
  text-decoration: none;
}
  .logo small {
  color: #27a86c;
  font-size: 0.6rem;
  display: inline-block;
  width: 50px;
  margin-left: 5px;
}

.busca {
  background: #f5f5f5;
  padding: 5px 10px;
  border-radius: 4px;
  display: flex;
}
.busca input {
  border: none;
  background: transparent;
  outline: none;
  width: 20vw;
}
.busca button {
  border: none;
  background: transparent;
  cursor: pointer;
}

.menu a {
  margin: 0 10px;
  text-decoration: none;
  color: #7f7f7f;
  font-size: 14px;
}

.menu a:hover {
  color: #27a86c;
}

.acoes {
  display: flex;
  justify-content: space-between;
}
.acoes button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  margin-left: 10px;

}

.favorito {
  position: relative;
}
.contador {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #27a86c;
  color: white;
  font-size: 9px;
  padding: 2px 5px;
  border-radius: 50%;
}
</style>
