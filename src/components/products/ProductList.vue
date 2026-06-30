<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from './ProductCard.vue'
import { produtos } from '@/data/product'

const route = useRoute()

const produtosFiltrados = computed(() => {
  const q = (route.query.q ?? '').toLowerCase()

  if (!q) return []

  return produtos.filter((p) =>
    p.titulo.toLowerCase().includes(q)
  )
})
</script>

<template>
  <div class="catalogo">
    <ProductCard
      v-for="livro in produtosFiltrados"
      :key="livro.id"
      :livro="livro"
    />
  </div>
</template>

<style scoped>
.catalogo {
  margin-top: 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
