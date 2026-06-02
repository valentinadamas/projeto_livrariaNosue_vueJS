<script setup>
import { produtos } from '@/data/product.js'
import ProductCard from './products/ProductCard.vue'
</script>

<template>
  <section class="lancamentos-secao">
    <h2 class="titulo-secao">Lançamentos</h2>

      <ProductCard
        v-for="livro in produtos"
        :key="livro.id"
        :livro="livro"
      />
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

</style>
