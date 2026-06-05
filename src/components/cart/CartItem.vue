<script setup>
import { removerDoCarrinho } from '@/store/cart'

const props = defineProps({
  livro: {
    type: Object,
    required: true
  }
})

function aumentar() {
  props.livro.quantidade++
}

function diminuir() {
  if (props.livro.quantidade <= 1) {
    removerDoCarrinho(props.livro.id)
    return
  }
  props.livro.quantidade--
}
</script>

<template>
  <div class="item">
    <div class="produto">
      <img :src="props.livro.capa" :alt="props.livro.titulo">
      <div class="detalhes">
        <h3>{{ props.livro.titulo }}</h3>
        <p class="autor">{{ props.livro.autor }}</p>
      </div>
    </div>

    <div class="quantidade">
      <div class="controle">
        <button @click="diminuir">-</button>
        <span>{{ props.livro.quantidade }}</span>
        <button @click="aumentar">+</button>
      </div>
    </div>

    <div class="subtotal">
      R$ {{ (props.livro.preco * props.livro.quantidade).toFixed(2) }}
    </div>
  </div>
</template>

<style scoped>
.item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #e0e0e0;
}

.produto {
  display: flex;
  gap: 20px;
  align-items: center;
}

.produto img {
  width: 65px;
  height: auto;
  object-fit: cover;
}

.detalhes h3 {
  font-size: 1.1rem;
  color: #000;
  margin: 0 0 6px 0;
  font-weight: bold;
}

.detalhes .autor {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.quantidade {
  display: flex;
  justify-content: flex-start;
}

.controle {
  display: flex;
  align-items: center;
  border: 1px solid #999;
  border-radius: 4px;
  background: #fff;
}

.controle button {
  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1.1rem;
  color: #333;
}

.controle span {
  padding: 0 5px;
  font-size: 1rem;
  color: #333;
}

.subtotal {
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
  text-align: right;
}
</style>
