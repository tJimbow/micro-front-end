<template>
  <div>
    <v-row class="mb-4" align="center">
      <v-col cols="8">
        <h1>Liste des produits</h1>
      </v-col>
      <v-col cols="4" class="text-right">
        <v-btn color="primary" to="/add" router>Ajouter un produit</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="product in store.products" :key="product.id" cols="12" md="6" lg="4">
        <router-link :to="`/product/${product.id}`" style="text-decoration: none;">
          <v-card class="mb-4" hover>
            <v-img v-if="product.image" :src="product.image" height="180px" cover />
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-text>{{ product.description }}</v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../store';
const store = useProductStore();
onMounted(() => {
  store.fetchProducts();
});
</script>

