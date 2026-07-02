<script setup>
import { produtos } from '@/data/product.js'
import ProductCard from './products/ProductCard.vue'
</script>


<template>
  <section class="lancamentos-secao">
    <h2 class="titulo-secao">Lançamentos</h2>

    <div class="livros-grid">
      <ProductCard
        v-for="livro in produtos"
        :key="livro.id"
        :livro="livro"
      />
    </div>
  </section>
</template>

<style scoped>
.lancamentos-secao {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.titulo-secao {
  font-size: 24px;
  color: #333333;
  margin-bottom: 25px;
  font-weight: bold;
}
.livros-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>