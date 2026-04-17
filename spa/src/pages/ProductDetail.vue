<template>
  <n-space justify="center">
    <n-card v-if="product" style="max-width: 500px; width: 100%;">
      <template #header>
        {{ product.name }}
      </template>
      <div>{{ product.description }}</div>
      <template #footer>
        <n-button type="primary" @click="addToCart">Ajouter au panier</n-button>
      </template>
    </n-card>
    <n-alert v-else type="error">Produit introuvable.</n-alert>
  </n-space>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../store';
import { NCard, NButton, NAlert, NSpace } from 'naive-ui';

const route = useRoute();
const store = useProductStore();
const product = store.products.find(p => p.id == route.params.id);
function addToCart() {
  if (product) store.addToCart(product);
}
</script>
