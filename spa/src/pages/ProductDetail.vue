<template>
  <div>
    <v-card v-if="product" class="mx-auto" max-width="500">
      <v-img v-if="product.image" :src="product.image" height="200px" cover />
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-text>{{ product.description }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="addToCart">Ajouter au panier</v-btn>
      </v-card-actions>
    </v-card>
    <v-alert v-else type="error" border="start" color="error" variant="tonal">Produit introuvable.</v-alert>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../store';
const route = useRoute();
const store = useProductStore();
const product = store.products.find(p => p.id == route.params.id);
function addToCart() {
  if (product) store.addToCart(product);
}
</script>

