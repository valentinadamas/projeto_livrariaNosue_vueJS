import { reactive } from 'vue'

export const cart = reactive({
  itens: []
})

export function adicionarAoCarrinho(livro) {
  const itemExistente = cart.itens.find(
    item => item.id === livro.id
  )

  if (itemExistente) {
    itemExistente.quantidade++
  } else {
    cart.itens.push({
      ...livro,
      quantidade: 1
    })
  }
}
export function removerDoCarrinho(id) {
  const index = cart.itens.findIndex(
    item => item.id === id
  )

  if (index !== -1) {
    cart.itens.splice(index, 1)
  }
}
