<template>
  <div>
    <h1>Mon panier</h1>
    <v-row v-if="store.cart.length" class="mb-4">
      <v-col v-for="item in store.cart" :key="item.id" cols="12" md="6" lg="4">
        <v-card class="mb-4">
          <v-img v-if="item.image" :src="item.image" height="120px" cover />
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text>{{ item.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="error" @click="remove(item.id)">Retirer</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-btn v-if="store.cart.length" color="primary" @click="validate">Valider le panier</v-btn>
    <div v-else>
      <v-alert type="info" border="start" color="primary" variant="tonal">Votre panier est vide.</v-alert>
    </div>
  </div>
</template>
<script setup>
import { useProductStore } from '../store';
const store = useProductStore();
function remove(id) {
  store.removeFromCart(id);
}
function validate() {
  alert('Panier validé !');
  store.clearCart();
}
</script>

