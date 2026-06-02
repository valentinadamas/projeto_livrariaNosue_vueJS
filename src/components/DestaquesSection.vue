<script setup>

</script>
<template>
  <div class="destaques-faixa">
    <div class="info-bloco">
      <span class="icone">📖</span>
      <span class="texto">Frete grátis para SC</span>
    </div>

    <div class="info-bloco borda-lateral">
      <span class="icone">⭐</span>
      <span class="texto">Livros recomendados</span>
    </div>

    <div class="info-bloco">
      <span class="icone">📚</span>
      <span class="texto">Mais vendidos</span>
    </div>
  </div>
</template>

<style scoped>
.destaques-faixa {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #27ae60;
  border-bottom: 1px solid #27ae60;
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
}

.info-bloco {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
}

.borda-lateral {
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
}

.icone {
  font-size: 20px;
}

.texto {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
}
</style>
