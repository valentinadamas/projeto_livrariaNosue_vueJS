<script setup>
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'
import { cart } from '@/store/cart'
</script>

<template>
  <section class="cart">
    <h1>Carrinho</h1>

    <div class="cabecalho">
      <span class="col-titulo">Título</span>
      <span class="col-qtd">Quantidade</span>
      <span class="col-sub">Subtotal</span>
    </div>

    <p v-if="cart.itens.length === 0" class="vazio">
      Seu carrinho está vazio.
    </p>

    <div class="lista-itens" v-else>
      <CartItem
        v-for="livro in cart.itens"
        :key="livro.id"
        :livro="livro"
      />
    </div>

    <div class="rodape-carrinho">
      <div class="acoes-esquerda">
        <RouterLink class="btn-voltar" to="/">  <p>Voltar para loja</p></RouterLink>

        <div class="cupom-container">
          <input type="text" placeholder="Código do cupom" class="input-cupom">
          <button class="btn-cupom">Inserir Cupom</button>
        </div>
      </div>

      <div class="acoes-direita">
        <CartSummary />
      </div>
    </div>
  </section>
</template>

<style scoped>
.cart {
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #27a86c;
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: bold;
}

.cabecalho {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 2px solid #27a86c;
  padding-bottom: 12px;
  font-weight: 600;
  color: #444;
}

.col-sub {
  text-align: right;
}

.vazio {
  padding: 40px 0;
  text-align: center;
  color: #666;
}

/* Flexbox para colocar os botões de um lado e o resumo do outro */
.rodape-carrinho {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 30px;
  gap: 40px;
}

.acoes-esquerda {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.btn-voltar {
  align-self: flex-start;
  background: white;
  border: 1px solid #ccc;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  color: #333;
  font-weight: bold;
}

.cupom-container {
  display: flex;
  gap: 15px;
}

.input-cupom {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 4px;
  width: 250px;
  outline: none;
}

.btn-cupom {
  background: #27a86c;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
