<template>
  <n-space vertical size="large">
    <n-h1>Mon panier</n-h1>
    <n-grid v-if="store.cart.length" cols="1 s:2 m:3" x-gap="16" y-gap="16">
      <n-grid-item v-for="item in store.cart" :key="item.id">
        <n-card>
          <template #cover v-if="item.image">
            <img :src="item.image" :alt="item.name" style="width: 100%; height: 120px; object-fit: cover;" />
          </template>
          <template #header>
            <n-h3>{{ item.name }}</n-h3>
          </template>
          <div>{{ item.description }}</div>
          <template #footer>
            <n-button type="error" @click="remove(item.id)">Retirer</n-button>
          </template>
        </n-card>
      </n-grid-item>
    </n-grid>
    <n-button v-if="store.cart.length" type="primary" @click="validate">Valider le panier</n-button>
    <n-alert v-else type="info">Votre panier est vide.</n-alert>
  </n-space>
</template>
<script setup>
import { useProductStore } from '../store';
import { NGrid, NGridItem, NCard, NButton, NAlert, NSpace, NH1, NH3 } from 'naive-ui';
const store = useProductStore();
function remove(id) {
  store.removeFromCart(id);
}
function validate() {
  alert('Panier validé !');
  store.clearCart();
}
</script>
