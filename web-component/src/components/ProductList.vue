<template>
  <div>
      <n-grid x-gap="12" y-gap="12" :cols="3" v-if="products">
        <n-gi v-for="product in products" :key="product.id">
          <ProductTile
                @click="onTileClick(product)"
                :title="product.name"
                :description="product.description"
          />
          <n-button @click="emitAddToCart(product)" type="primary" block>Ajouter au panier</n-button>
        </n-gi>
      </n-grid>
      <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue'
import { NGrid, NGi, NButton } from 'naive-ui'
import ProductTile from './ProductTile.vue'

const products = ref([])

async function fetchProducts() {
  const res = await fetch('http://localhost:3001/products')

  products.value = await res.json()
}

const emit = defineEmits(['add-to-cart', "tile-click"])

function emitAddToCart(product) {
    emit("add-to-cart", product)
}

const onTileClick = (product) => {
    emit("tile-click", product)
}

onMounted(async () => {
    await fetchProducts()
})
</script>

