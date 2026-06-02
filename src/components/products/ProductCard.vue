<script setup>
// Este arquivo é um componente Vue que permite componentizar a exibição de um produto individual em uma lista de produtos. Ele exibe as informações do produto, como nome, preço e imagem, e pode incluir um botão para adicionar o produto ao carrinho de compras. O componente é projetado para ser reutilizado em diferentes partes do aplicativo onde a exibição de produtos é necessária, como na página de listagem de produtos ou em recomendações de produtos relacionados. Como sugestão, não exiba todas as informações do Livro, deixando alguma div oculta e trabalhando o v-for ou v-if para exibir somente o nome e o preço, e ao clicar em um botão "Detalhes" ou "Ver mais", exiba as informações adicionais do produto, como descrição, autor e imagem. Isso pode ser feito usando uma propriedade de estado para controlar a visibilidade das informações adicionais.

defineProps({
  livro: {
    tipo: Object,
    required: true
  }
})
</script>

<template>
  <div class="livro-card">

    <div class="livro-capa">
      <img :src="livro.capa" :alt="livro.titulo" />
    </div>

    <div class="livro-info">
      <h3>{{ livro.titulo }}</h3>
      <p class="autor">{{ livro.autor }}</p>
      <p class="preco">R$ {{ livro.preco.toFixed(2) }}</p>
    </div>

    <button class="botao-comprar">Comprar</button>

  </div>
</template>

<style scoped>
.livro-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
}

.livro-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.livro-capa {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  height: 220px;
}

.livro-capa img {
  max-width: 100%;
  max-height: 100%;
}

.livro-info h3 {
  font-size: 15px;
  margin: 0 0 5px 0;
  color: #333333;
  font-weight: bold;
}

.livro-info .autor {
  font-size: 13px;
  color: #7f7f7f;
  margin: 0 0 12px 0;
}

.livro-info .preco {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin: 0 0 15px 0;
}

.botao-comprar {
  background-color: #27a86c;
  color: white;
  border: none;
  padding: 10px 0;
  width: 100%;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.botao-comprar:hover {
  background-color: #1e8754;
}
</style>
