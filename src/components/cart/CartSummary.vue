<script setup>
import { computed } from 'vue'
import { cart } from '@/store/cart'

const total = computed(() => {
  return cart.itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  )
})
</script>

<template>
  <div class="summary">
    <h3>Total da Compra</h3>

    <div class="conteudo-resumo">
      <div class="linha">
        <span>Produtos:</span>
        <span>R$ {{ total.toFixed(2) }}</span>
      </div>

      <div class="linha">
        <span>Frete:</span>
        <span class="frete">Grátis</span>
      </div>

      <div class="linha total">
        <span>Total</span>
        <span>R$ {{ total.toFixed(2) }}</span>
      </div>
    </div>

    <button class="btn-pagamento">
      Ir para o pagamento
    </button>
  </div>
</template>

<style scoped>
.summary {
  width: 380px;
  border: 1px solid #333;
  padding: 24px;
  background: #fff;
}

h3 {
  font-size: 1.2rem;
  color: #333;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: bold;
}

.conteudo-resumo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #eee;
  padding-top: 15px;
}

.linha {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #444;
}

.frete {
  color: #444;
}

.total {
  border-top: 1px solid #eee;
  padding-top: 15px;
  font-weight: bold;
  font-size: 1.1rem;
  color: #000;
  margin-top: 5px;
}

.btn-pagamento {
  width: 100%;
  margin-top: 20px;
  padding: 14px;
  background: #27a86c;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
}

.btn-pagamento:hover {
  background: #1f8252;
}
</style>
